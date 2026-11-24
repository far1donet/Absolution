/* Mathematics: Analysis and Approaches. Multiple choice only, one minute per question.
   You're Scipa, a small graphic calculator riding the number line from 1 towards a googol and on to infinity.
   Right first time and fast goes furthest; a wrong answer gives you one more try (and disappoints Scipa).
   After each question Scipa shows how to solve it on a GDC (calc.js runs every step, so the screens are real).
   Q(id, spec, question, [options], index of the right option, GDC steps, worked solution, value the last GDC step shows, hl) */
(function(){
const CATALOG = [
  {label:"IB Mathematics: Analysis and Approaches · SL and HL", units:[
    {code:"1", name:"Number and algebra", topics:[["1.1","Sequences, series and finance"],["1.2","Exponents and logarithms"],["1.3","Binomial theorem and counting"],["1.4","Complex numbers and polynomials", true]]},
    {code:"2", name:"Functions", topics:[["2.1","Lines and quadratics"],["2.2","Composite, inverse and transformed functions"],["2.3","Exponential, logarithmic and rational functions"],["2.4","Polynomials and inequalities", true]]},
    {code:"3", name:"Geometry and trigonometry", topics:[["3.1","Triangles and 3D shapes"],["3.2","Radians, circles and identities"],["3.3","Trigonometric equations and graphs"],["3.4","Vectors, lines and planes", true]]},
    {code:"4", name:"Statistics and probability", topics:[["4.1","Descriptive statistics and regression"],["4.2","Probability"],["4.3","Binomial and normal distributions"],["4.4","Bayes' theorem and continuous variables", true]]},
    {code:"5", name:"Calculus", topics:[["5.1","Differentiation"],["5.2","Tangents, stationary points and kinematics"],["5.3","Integration and areas"],["5.4","Further calculus", true]]},
  ]},
];
const Q = (id, spec, q, opts, a, steps, why, k = null, hl = false) => ({id, spec, q, opts, a, steps, why, k, hl, mcq:true});
const RUN = ["app","Run-Matrix"], GRAPH = ["app","Graph"], DEG = ["mode","Deg"], RAD = ["mode","Rad"], DIST = ["app","Distribution"], EQN = ["app","Equation"], STAT = ["app","Statistics"];
const BIG = 1e99;

const PROMPTS = [
/* ---------- 1 Number and algebra ---------- */
Q("m01","1.1","An arithmetic sequence has u_{1} = 5 and common difference d = 3. Find S_{20}.",["670","635","1340","62"],0,
  [["note","Sₙ = n/2 (2u₁ + (n − 1)d)"],RUN,["run","20÷2×(2×5+19×3)"]],
  "S_{20} = 20/2 × (2 × 5 + 19 × 3) = 10 × 67 = 670. (62 is u_{20}, not the sum.)",670),
Q("m02","1.1","A geometric sequence has u_{1} = 48 and r = 0.5. Find the sum to infinity.",["96","24","72","192"],0,
  [["note","|r| < 1, so S∞ = u₁ / (1 − r)"],RUN,["run","48÷(1−0.5)"]],
  "S_{∞} = u_{1}/(1 − r) = 48/0.5 = 96.",96),
Q("m03","1.1","The 3rd term of a geometric sequence is 12 and the 6th term is 96. Find the first term.",["3","6","1.5","4"],0,
  [["note","u₆ ÷ u₃ = r³"],RUN,["run","(96÷12)^(1÷3)","2"],["note","r = 2, and u₃ = u₁r²"],["run","12÷Ans^2"]],
  "r^{3} = 96/12 = 8, so r = 2. Then u_{1} = u_{3}/r^{2} = 12/4 = 3.",3),
Q("m04","1.1","$1000 is invested at 4% per year, compounded monthly. Find its value after 5 years.",["$1221.00","$1216.65","$1200.00","$1221.40"],0,
  [["note","FV = PV(1 + r/(100k))^(kn) with k = 12"],RUN,["run","1000(1+0.04÷12)^(12×5)"]],
  "1000(1 + 0.04/12)^{60} = $1221.00. ($1216.65 compounds yearly, $1200 is simple interest and $1221.40 is continuous.)",1220.996594),
Q("m05","1.2","Solve 3^{2x+1} = 50.",["x = 1.28","x = 3.56","x = 1.78","x = 0.780"],0,
  [GRAPH,["graph",["3^(2x+1)","50"],[-1,3,-10,80]],["isct",0,1,1.3]],
  "Take logs: 2x + 1 = ln 50 / ln 3 = 3.561, so x = 1.28. On the GDC, intersect y = 3^{2x+1} with y = 50.",1.280438),
Q("m06","1.2","Find the exact value of log_{2} 32 + log_{3}(1/9).",["3","7","−3","2.5"],0,
  [["note","Change of base: logₐb = ln b ÷ ln a"],RUN,["run","ln(32)÷ln(2)+ln(1÷9)÷ln(3)"]],
  "log_{2} 32 = 5 and log_{3}(1/9) = −2, so the total is 3.",3),
Q("m07","1.2","Solve ln x + ln(x − 2) = ln 8.",["x = 4","x = −2 or x = 4","x = 5","x = 1 + √8"],0,
  [["note","ln x + ln(x − 2) = ln(x(x − 2)), so x² − 2x − 8 = 0"],EQN,["poly",[1,-2,-8]],["note","Reject x = −2: ln of a negative number is undefined"]],
  "x(x − 2) = 8 gives x^{2} − 2x − 8 = 0, so x = 4 or x = −2. ln(−2) is undefined, so x = 4 only.",4),
Q("m08","1.2","Given a = log 2 and b = log 3, write log 72 in terms of a and b.",["3a + 2b","2a + 3b","6ab","a³b²"],0,
  [RUN,["run","log(72)"],["note","Check the option numerically"],["run","3log(2)+2log(3)"]],
  "72 = 2^{3} × 3^{2}, so log 72 = 3 log 2 + 2 log 3 = 3a + 2b.",1.857332496),
Q("m09","1.3","Find the coefficient of x³ in the expansion of (2x − 1)⁶.",["−160","160","−20","480"],0,
  [["note","Term: ⁶C₃ (2x)³ (−1)³"],RUN,["run","6C3×2^3×(−1)^3"]],
  "The x^{3} term is ^{6}C_{3}(2x)^{3}(−1)^{3} = 20 × 8 × (−1) x^{3}, so the coefficient is −160.",-160),
Q("m10","1.3","Find the constant term in the expansion of (x + 2/x)⁸.",["1120","70","560","2240"],0,
  [["note","Term: ⁸Cᵣ x^(8−r) (2/x)^r = ⁸Cᵣ 2^r x^(8−2r), constant when r = 4"],RUN,["run","8C4×2^4"]],
  "The power of x is 8 − 2r, which is 0 when r = 4: ^{8}C_{4} × 2^{4} = 70 × 16 = 1120.",1120),
Q("m11","1.3","In how many ways can a committee of 4 be chosen from a class of 12 students?",["495","11 880","20 736","48"],0,
  [["note","Order doesn't matter, so use combinations"],RUN,["run","12C4"]],
  "^{12}C_{4} = 495. (11 880 = ^{12}P_{4} counts ordered choices.)",495,HL),
Q("m12","1.3","How many different arrangements are there of the letters of the word PARALLEL?",["3360","40 320","6720","20 160"],0,
  [["note","8 letters with A twice and L three times"],RUN,["run","8!÷(2!×3!)"]],
  "8!/(2! × 3!) = 40 320/12 = 3360.",3360,HL),
Q("m13","1.4","Given z = 3 − 4i, find |z²|.",["25","5","7","625"],0,
  [RUN,["run","√(3^2+(−4)^2)"],["note","|z²| = |z|²"],["run","Ans^2"]],
  "|z| = √(9 + 16) = 5 and |z^{2}| = |z|^{2} = 25. (Check: z^{2} = −7 − 24i and √(49 + 576) = 25.)",25,HL),
Q("m14","1.4","Solve z³ = 8 for z ∈ ℂ.",["2, −1 + √3 i, −1 − √3 i","2 only","2, 2i, −2i","2, 1 + √3 i, 1 − √3 i"],0,
  [["note","z³ − 8 = 0 is a cubic: a = 1, b = 0, c = 0, d = −8"],EQN,["poly",[1,0,0,-8]]],
  "z = 2e^{2πki/3} for k = 0, 1, 2, which gives 2 and −1 ± √3 i. Complex roots of a real polynomial come in conjugate pairs.",2,HL),
Q("m15","1.4","Write z = 1 + i in the form re^{iθ}.",["√2 e^{iπ/4}","2e^{iπ/4}","√2 e^{iπ/2}","√2 e^{−iπ/4}"],0,
  [RAD,RUN,["run","√(1^2+1^2)"],["note","arg z = arctan(1/1), in the first quadrant"],["run","tan⁻¹(1÷1)"]],
  "r = √2 and θ = arctan 1 = π/4 (0.785...), so z = √2 e^{iπ/4}.",0.785398163,HL),
Q("m16","1.4","Find the roots of z² − 4z + 13 = 0.",["2 ± 3i","−2 ± 3i","4 ± 3i","2 ± 9i"],0,
  [EQN,["poly",[1,-4,13]]],
  "z = (4 ± √(16 − 52))/2 = (4 ± 6i)/2 = 2 ± 3i.",2,HL),
/* ---------- 2 Functions ---------- */
Q("m17","2.1","Find the equation of the line through (2, 5) perpendicular to y = 2x − 1.",["y = −½x + 6","y = 2x + 1","y = −½x + 4","y = ½x + 4"],0,
  [["note","Perpendicular gradient: −1 ÷ 2"],RUN,["run","5−(−1÷2)×2"]],
  "m = −1/2, so y − 5 = −½(x − 2), which gives y = −½x + 6.",6),
Q("m18","2.1","Find the coordinates of the vertex of y = 2x² − 12x + 7.",["(3, −11)","(−3, 61)","(3, 7)","(6, 7)"],0,
  [GRAPH,["graph",["2x^2−12x+7"],[-2,8,-15,20]],["min",0,3]],
  "x = −b/2a = 12/4 = 3 and y = 18 − 36 + 7 = −11.",-11),
Q("m19","2.1","For which values of k does x² + kx + 9 = 0 have two equal real roots?",["k = ±6","k = 6 only","k = ±3","k = 36"],0,
  [["note","Equal roots: Δ = k² − 4(1)(9) = 0"],RUN,["run","√(4×1×9)"]],
  "k^{2} − 36 = 0, so k = 6 or k = −6.",6),
Q("m20","2.1","Where does the graph of y = x² − 5x + 4 cross the x-axis?",["x = 1 and x = 4","x = −1 and x = −4","x = 2.5","x = 0 and x = 5"],0,
  [GRAPH,["graph",["x^2−5x+4"],[-2,7,-4,8]],["root",0,0.8],["root",0,4.2]],
  "x^{2} − 5x + 4 = (x − 1)(x − 4), so x = 1 and x = 4.",4),
Q("m21","2.2","f(x) = 2x + 3 and g(x) = x² − 1. Find (f ∘ g)(3).",["19","80","15","35"],0,
  [["note","Inside first: g(3)"],RUN,["run","3^2−1"],["note","then f of that"],["run","2Ans+3"]],
  "g(3) = 8 and f(8) = 19. (80 is (g ∘ f)(3).)",19),
Q("m22","2.2","f(x) = (3x − 1)/2. Find f^{−1}(4).",["3","5.5","2.5","0.25"],0,
  [["note","f⁻¹(4) is the x where f(x) = 4"],GRAPH,["graph",["(3x−1)÷2","4"],[-2,6,-3,8]],["isct",0,1,2.5]],
  "Solve (3x − 1)/2 = 4: 3x − 1 = 8, so x = 3. (5.5 is f(4).)",3),
Q("m23","2.2","The graph of y = f(x) is translated 2 units right and 3 units down. Find the equation of the new graph.",["y = f(x − 2) − 3","y = f(x + 2) − 3","y = f(x − 2) + 3","y = f(x + 3) − 2"],0,
  [["note","Try it with f(x) = x²: the vertex should move from (0, 0) to (2, −3)"],GRAPH,["graph",["x^2","(x−2)^2−3"],[-4,6,-5,10]],["min",1,2]],
  "Replacing x by x − 2 moves the graph 2 right; subtracting 3 moves it 3 down.",-3),
Q("m24","2.3","Find the equations of the asymptotes of f(x) = 3/(x − 2) + 1.",["x = 2 and y = 1","x = −2 and y = 1","x = 2 and y = 3","x = 1 and y = 2"],0,
  [GRAPH,["graph",["3÷(x−2)+1"],[-4,8,-6,8]],["note","Far from the origin the curve flattens towards y = 1"],RUN,["run","3÷(1000−2)+1"]],
  "The denominator is zero at x = 2 (vertical asymptote) and 3/(x − 2) → 0 as x → ±∞, so y = 1 (horizontal asymptote).",1.003006012),
Q("m25","2.3","A population grows as P = 200e^{0.15t}, t in years. When does it first exceed 1000?",["After 10.7 years","After 33.3 years","After 1.61 years","After 46.1 years"],0,
  [GRAPH,["graph",["200e^(0.15x)","1000"],[0,15,-100,1500]],["isct",0,1,10]],
  "e^{0.15t} = 5, so t = ln 5 / 0.15 = 10.7 years.",10.72958),
Q("m26","2.3","Solve 2^{x} = 3x for x > 1.",["x = 3.31","x = 0.458","x = 3","x = 1.58"],0,
  [GRAPH,["graph",["2^x","3x"],[-1,5,-2,20]],["note","Two intersections: take the one with x > 1"],["isct",0,1,3.3]],
  "This can't be solved algebraically, so use the GDC: the curves meet at x = 0.458 and x = 3.31, and only 3.31 is greater than 1.",3.313178),
Q("m27","2.3","Find the inverse of f(x) = e^{2x} − 1.",["f^{−1}(x) = ½ ln(x + 1)","f^{−1}(x) = ln(2x + 1)","f^{−1}(x) = 2 ln(x + 1)","f^{−1}(x) = ½ ln x + 1"],0,
  [["note","Check: f⁻¹(f(1)) should give 1"],RUN,["run","e^2−1"],["run","ln(Ans+1)÷2"]],
  "y + 1 = e^{2x}, so x = ½ ln(y + 1). Swap x and y: f^{−1}(x) = ½ ln(x + 1), for x > −1.",1),
Q("m28","2.3","A substance has a half-life of 6 years. What fraction of it remains after 20 years?",["0.0992","0.300","0.167","0.0313"],0,
  [RUN,["run","0.5^(20÷6)"]],
  "(1/2)^{20/6} = 0.0992, so just under 10% remains.",0.0992125657),
Q("m29","2.4","When p(x) = x³ + ax² − 4x + 4 is divided by (x − 2), the remainder is 8. Find a.",["a = 1","a = 2","a = −1","a = 3"],0,
  [["note","Remainder theorem: p(2) = 8 + 4a − 8 + 4 = 8"],RUN,["run","(8−4)÷4"]],
  "p(2) = 4a + 4 = 8, so a = 1.",1,HL),
Q("m30","2.4","Find the sum of the roots of 2x³ − 5x² + 3x − 7 = 0.",["5/2","−5/2","7/2","3/2"],0,
  [EQN,["poly",[2,-5,3,-7]],["note","Sum of roots = −b/a"],RUN,["run","5÷2"]],
  "For a cubic, the sum of the roots is −b/a = 5/2 (the two complex roots add up to a real number).",2.5,HL),
Q("m31","2.4","Solve |2x − 3| > 5.",["x < −1 or x > 4","−1 < x < 4","x > 4","x < −4 or x > 1"],0,
  [GRAPH,["graph",["abs(2x−3)","5"],[-4,8,-2,12]],["isct",0,1,-1.2],["isct",0,1,4.2]],
  "2x − 3 > 5 gives x > 4, and 2x − 3 < −5 gives x < −1. On the graph, y = |2x − 3| is above y = 5 outside the intersections.",4,HL),
Q("m32","2.4","Solve (x − 1)/(x + 2) ≤ 2.",["x ≤ −5 or x > −2","−5 ≤ x < −2","x ≥ −5","x ≤ −2 or x ≥ 5"],0,
  [GRAPH,["graph",["(x−1)÷(x+2)","2"],[-10,6,-6,8]],["isct",0,1,-5.5],["note","The curve is also below y = 2 to the right of the asymptote x = −2"]],
  "(x − 1)/(x + 2) − 2 = −(x + 5)/(x + 2) ≤ 0, so x ≤ −5 or x > −2. Never multiply by x + 2 without knowing its sign.",-5,HL),
/* ---------- 3 Geometry and trigonometry ---------- */
Q("m33","3.1","In triangle ABC, AB = 7 cm, AC = 9 cm and angle BAC = 40°. Find BC.",["5.79 cm","14.6 cm","33.5 cm","8.06 cm"],0,
  [DEG,["note","Cosine rule: a² = b² + c² − 2bc cos A"],RUN,["run","√(7^2+9^2−2×7×9cos(40))"]],
  "BC^{2} = 49 + 81 − 126 cos 40° = 33.48, so BC = 5.79 cm. (14.6 cm is what you get in radian mode.)",5.786052),
Q("m34","3.1","Find the area of a triangle with sides 8 cm and 11 cm and an included angle of 120°.",["38.1 cm²","44.0 cm²","22.0 cm²","76.2 cm²"],0,
  [DEG,RUN,["run","0.5×8×11sin(120)"]],
  "Area = ½ab sin C = ½ × 8 × 11 × sin 120° = 38.1 cm^{2}.",38.10512),
Q("m35","3.1","A cone has base radius 4 cm and slant height 10 cm. Find its volume.",["154 cm³","168 cm³","126 cm³","461 cm³"],0,
  [["note","First the height, by Pythagoras"],RUN,["run","√(10^2−4^2)"],["note","V = ⅓πr²h"],["run","π×4^2×Ans÷3"]],
  "h = √(100 − 16) = 9.17 cm and V = ⅓π(4^{2})(9.17) = 154 cm^{3}. (168 uses the slant height as the height; 126 is the curved surface area.)",153.5598),
Q("m36","3.1","A cuboid measures 3 cm × 4 cm × 12 cm. Find the angle between a space diagonal and the base.",["67.4°","22.6°","71.6°","1.18°"],0,
  [DEG,["note","The base diagonal is √(3² + 4²)"],RUN,["run","√(3^2+4^2)"],["run","tan⁻¹(12÷Ans)"]],
  "The base diagonal is 5 cm, so tan θ = 12/5 and θ = 67.4°.",67.38014),
Q("m37","3.2","A sector has radius 6 cm and angle 1.2 radians. Find its area.",["21.6 cm²","7.2 cm²","43.2 cm²","0.377 cm²"],0,
  [RUN,["run","0.5×6^2×1.2"]],
  "Area = ½r^{2}θ = ½ × 36 × 1.2 = 21.6 cm^{2}. (7.2 cm is the arc length.)",21.6),
Q("m38","3.2","Given sin θ = 3/5 and θ is obtuse, find cos 2θ.",["7/25","−7/25","24/25","−24/25"],0,
  [["note","cos 2θ = 1 − 2sin²θ (the sign of cos θ doesn't matter here)"],RUN,["run","1−2(3÷5)^2"]],
  "cos 2θ = 1 − 2(9/25) = 7/25. (sin 2θ = −24/25, because cos θ = −4/5 when θ is obtuse.)",0.28),
Q("m39","3.2","Find the exact value of sin(π/3) cos(π/6) + tan(π/4).",["7/4","√3/2 + 1","5/4","3/2"],0,
  [RAD,RUN,["run","sin(π÷3)cos(π÷6)+tan(π÷4)"]],
  "(√3/2)(√3/2) + 1 = 3/4 + 1 = 7/4.",1.75),
Q("m40","3.3","Solve 2 sin x = 1 for 0 ≤ x ≤ 2π.",["x = π/6 and 5π/6","x = π/6 and 7π/6","x = π/3 and 2π/3","x = π/6 only"],0,
  [RAD,GRAPH,["graph",["2sin(x)","1"],[0,6.3,-2.5,2.5]],["isct",0,1,0.5],["isct",0,1,2.6]],
  "sin x = ½ gives x = π/6, and sine is also positive in the second quadrant, so x = π − π/6 = 5π/6.",2.617994),
Q("m41","3.3","Find the period and amplitude of y = 4 cos(3x) − 1.",["Period 2π/3, amplitude 4","Period 3, amplitude 4","Period 2π/3, amplitude 5","Period 6π, amplitude 4"],0,
  [RAD,GRAPH,["graph",["4cos(3x)−1"],[0,4.2,-6,4]],["max",0,2.1],["note","Maxima repeat every 2π ÷ 3"],RUN,["run","2π÷3"]],
  "Period = 2π/b = 2π/3 and amplitude = |a| = 4. The −1 moves the graph down but doesn't change the amplitude.",2.094395),
Q("m42","3.3","Solve 2cos²x + 3 sin x = 3 for 0° ≤ x ≤ 180°.",["30°, 90° and 150°","30° and 150° only","90° only","60°, 90° and 120°"],0,
  [["note","Use cos²x = 1 − sin²x: 2sin²x − 3sin x + 1 = 0"],EQN,["poly",[2,-3,1]],DEG,RUN,["run","sin⁻¹(0.5)"],["run","180−Ans"]],
  "(2 sin x − 1)(sin x − 1) = 0, so sin x = ½ (x = 30°, 150°) or sin x = 1 (x = 90°).",150),
Q("m43","3.4","Find the angle between a = (2, −1, 3) and b = (1, 4, −2).",["118°","62.2°","2.06°","28.0°"],0,
  [DEG,RUN,["run","2×1+(−1)×4+3×(−2)"],["note","cos θ = a·b ÷ (|a||b|)"],["run","cos⁻¹(Ans÷(√(14)√(21)))"]],
  "a·b = −8, |a| = √14 and |b| = √21, so cos θ = −8/√294 and θ = 118°. (62.2° drops the minus sign.)",117.8118,HL),
Q("m44","3.4","Lines r = (1, 2, 0) + λ(2, −1, 2) and r = (5, −1, 4) + μ(1, −1, 1) intersect. Find the point of intersection.",["(3, 1, 2)","(5, −1, 4)","(1, 2, 0)","(4, −2, 5)"],0,
  [["note","x: 1 + 2λ = 5 + μ and y: 2 − λ = −1 − μ"],EQN,["simul",[[2,-1,4],[-1,1,-3]]],["note","λ = 1: substitute into the first line"],RUN,["run","1+2×1"]],
  "Solving gives λ = 1 and μ = −2, which also satisfy the z equation (2 = 4 − 2). The point is (3, 1, 2).",3,HL),
Q("m45","3.4","Find a vector perpendicular to both (1, 2, 3) and (4, 5, 6).",["(−3, 6, −3)","(3, 6, 3)","(4, 10, 18)","(−3, −6, −3)"],0,
  [["note","Cross product, one component at a time"],RUN,["run","2×6−3×5"],["run","3×4−1×6"],["run","1×5−2×4"]],
  "(1, 2, 3) × (4, 5, 6) = (12 − 15, 12 − 6, 5 − 8) = (−3, 6, −3).",-3,HL),
/* ---------- 4 Statistics and probability ---------- */
Q("m46","4.1","Find the standard deviation of the data 4, 7, 7, 9, 12, 15, 18.",["4.59","4.96","21.1","10.3"],0,
  [STAT,["stat",[4,7,7,9,12,15,18]],["1var","σx"]],
  "Use σ_{x} from 1-variable statistics: 4.59. (4.96 is s_{x}, 21.1 is the variance and 10.3 is the mean.)",4.589251),
Q("m47","4.1","x: 1, 2, 3, 4, 5 and y: 3, 5, 6, 9, 11. Find the regression line of y on x.",["y = 2x + 0.8","y = 0.8x + 2","x = 0.490y − 0.333","y = 2.2x + 0.2"],0,
  [STAT,["stat",[1,2,3,4,5],[3,5,6,9,11]],["reg"]],
  "Linear regression (ax + b) gives a = 2 and b = 0.8. The regression line of x on y is a different line.",2),
Q("m48","4.1","A data set has Q_{1} = 14 and Q_{3} = 26. Which of these values is an outlier?",["45","40","−3","30"],0,
  [["note","Fences: Q₃ + 1.5 × IQR and Q₁ − 1.5 × IQR"],RUN,["run","26+1.5(26−14)"],["run","14−1.5(26−14)"]],
  "IQR = 12, so values above 26 + 18 = 44 or below 14 − 18 = −4 are outliers. Only 45 is.",-4),
Q("m49","4.1","x: 2, 4, 6, 8, 10 and y: 9, 7, 6, 4, 1. Find Pearson's correlation coefficient r.",["−0.985","0.985","−0.950","0.970"],0,
  [STAT,["stat",[2,4,6,8,10],[9,7,6,4,1]],["reg","r"]],
  "r = −0.985: a very strong negative linear correlation. (0.970 is r^{2}.)",-0.9851041),
Q("m50","4.2","P(A) = 0.4, P(B) = 0.5 and P(A ∪ B) = 0.7. Find P(A | B).",["0.4","0.5","0.2","0.35"],0,
  [["note","P(A ∩ B) = P(A) + P(B) − P(A ∪ B)"],RUN,["run","(0.4+0.5−0.7)÷0.5"]],
  "P(A ∩ B) = 0.2 and P(A | B) = 0.2/0.5 = 0.4. That equals P(A), so A and B are independent.",0.4),
Q("m51","4.2","Two fair six-sided dice are rolled. Find the probability that the total is 8.",["5/36","1/6","1/9","7/36"],0,
  [["note","(2,6) (3,5) (4,4) (5,3) (6,2): 5 of the 36 outcomes"],RUN,["run","5÷36"]],
  "Five of the 36 equally likely outcomes total 8, so P = 5/36.",0.138888889),
Q("m52","4.2","A bag holds 5 red and 3 blue balls. Two are taken without replacement. Find P(both red).",["5/14","25/64","5/8","15/28"],0,
  [RUN,["run","5÷8×4÷7"]],
  "5/8 × 4/7 = 20/56 = 5/14. (25/64 assumes replacement; 15/28 is one of each colour.)",0.357142857),
Q("m53","4.3","X ~ B(10, 0.3). Find P(X = 4).",["0.200","0.850","0.350","0.150"],0,
  [DIST,["binpd",4,10,0.3]],
  "BinomialPD with x = 4, n = 10, p = 0.3 gives 0.200. (0.850 is P(X ≤ 4) and 0.150 is P(X ≥ 5).)",0.200120949),
Q("m54","4.3","X ~ B(20, 0.25). Find P(X ≤ 3).",["0.225","0.134","0.775","0.0913"],0,
  [DIST,["bincd",0,3,20,0.25]],
  "BinomialCD from 0 to 3 gives 0.225. (0.134 is P(X = 3) and 0.0913 is P(X ≤ 2).)",0.225156048),
Q("m55","4.3","Heights are normally distributed with mean 170 cm and standard deviation 8 cm. Find P(H > 180).",["0.106","0.894","0.789","0.211"],0,
  [DIST,["normcd",180,BIG,8,170]],
  "NormalCD from 180 to a very large number, σ = 8, μ = 170, gives 0.106 (z = 1.25).",0.105649774),
Q("m56","4.3","Scores are normally distributed with mean 65 and standard deviation 12. Find the score exceeded by 10% of students.",["80.4","49.6","66.3","77.0"],0,
  [["note","Exceeded by 10% means 90% are below it"],DIST,["invn",0.9,12,65]],
  "Inverse normal with area 0.9 (left tail) gives 80.4. (49.6 is the score that 90% exceed.)",80.37862),
Q("m57","4.3","X ~ N(μ, 5²) and P(X < 40) = 0.2. Find μ.",["44.2","35.8","41.0","40.8"],0,
  [["note","Standardise: find z with P(Z < z) = 0.2"],DIST,["invn",0.2,1,0],RUN,["run","40−5Ans"]],
  "z = −0.8416, so (40 − μ)/5 = −0.8416 and μ = 40 + 4.21 = 44.2.",44.20811),
Q("m58","4.4","1% of people have a disease. A test detects it 95% of the time but also gives a positive result for 5% of healthy people. Find P(disease | positive).",["0.161","0.950","0.0095","0.059"],0,
  [["note","Bayes: P(D | +) = P(D)P(+ | D) ÷ P(+)"],RUN,["run","0.01×0.95"],["run","Ans÷(Ans+0.99×0.05)"]],
  "P(+) = 0.0095 + 0.0495 = 0.059, so P(D | +) = 0.0095/0.059 = 0.161. Most positives are false positives because the disease is rare.",0.161017,HL),
Q("m59","4.4","A continuous random variable has f(x) = kx² for 0 ≤ x ≤ 3 (and 0 otherwise). Find k.",["1/9","1/3","1/27","9"],0,
  [GRAPH,["graph",["x^2"],[-0.5,3.5,-1,10]],["intg",0,0,3],["note","k × 9 = 1"],RUN,["run","1÷9"]],
  "The total probability is 1: k∫_{0}^{3} x^{2} dx = 9k = 1, so k = 1/9.",0.111111111,HL),
Q("m60","4.4","For f(x) = x²/9 on 0 ≤ x ≤ 3, find E(X).",["2.25","1.5","2.38","3"],0,
  [["note","E(X) = ∫ x f(x) dx"],GRAPH,["graph",["x^3÷9"],[-0.5,3.5,-0.5,3.5]],["intg",0,0,3]],
  "E(X) = ∫_{0}^{3} x^{3}/9 dx = 81/36 = 2.25. (2.38 is the median.)",2.25,HL),
/* ---------- 5 Calculus ---------- */
Q("m61","5.1","f(x) = x³ − 4x² + 5. Find f′(2).",["−4","−3","4","12"],0,
  [GRAPH,["graph",["x^3−4x^2+5"],[-2,5,-8,8]],["dydx",0,2]],
  "f′(x) = 3x^{2} − 8x, so f′(2) = 12 − 16 = −4.",-4),
Q("m62","5.1","Differentiate y = x²e^{3x}.",["xe^{3x}(2 + 3x)","6xe^{3x}","2xe^{3x}","x²e^{3x}(2 + 3x)"],0,
  [["note","Check the answer at x = 0.5 against the GDC's numerical derivative"],GRAPH,["graph",["x^2e^(3x)"],[-2,1,-1,6]],["dydx",0,0.5],RUN,["run","0.5e^(1.5)(2+1.5)"]],
  "Product rule: 2xe^{3x} + 3x^{2}e^{3x} = xe^{3x}(2 + 3x).",7.842956),
Q("m63","5.1","y = ln(3x² + 1). Find dy/dx when x = 1.",["1.5","0.25","6","1.39"],0,
  [GRAPH,["graph",["ln(3x^2+1)"],[-3,3,-1,4]],["dydx",0,1]],
  "Chain rule: dy/dx = 6x/(3x^{2} + 1) = 6/4 = 1.5. (1.39 is y itself.)",1.5),
Q("m64","5.2","Find the equation of the tangent to y = x² − 3x + 1 at x = 4.",["y = 5x − 15","y = 5x + 5","y = −x/5 + 29/5","y = 5x − 4"],0,
  [GRAPH,["graph",["x^2−3x+1"],[-1,6,-3,12]],["dydx",0,4],["note","The point is (4, 5): c = 5 − 5 × 4"],RUN,["run","5−5×4"]],
  "y(4) = 5 and dy/dx = 2x − 3 = 5, so y − 5 = 5(x − 4), which is y = 5x − 15. (The normal has gradient −1/5.)",-15),
Q("m65","5.2","Find the local maximum point of y = x³ − 6x² + 9x + 2.",["(1, 6)","(3, 2)","(2, 4)","(−1, −14)"],0,
  [GRAPH,["graph",["x^3−6x^2+9x+2"],[-1,5,-4,10]],["max",0,1]],
  "dy/dx = 3x^{2} − 12x + 9 = 3(x − 1)(x − 3) = 0. The maximum is at x = 1, where y = 6. (3, 2) is the minimum.",6),
Q("m66","5.2","A particle has velocity v(t) = 3t² − 12 m s^{−1}. Find the total distance travelled for 0 ≤ t ≤ 3.",["23 m","9 m","−9 m","16 m"],0,
  [["note","Distance = ∫|v| dt (the particle turns round at t = 2)"],GRAPH,["graph",["abs(3x^2−12)"],[-0.5,3.5,-2,16]],["intg",0,0,3]],
  "∫_{0}^{3} |3t^{2} − 12| dt = 16 + 7 = 23 m. The displacement is −9 m.",23),
Q("m67","5.3","Find ∫_{1}^{3} (2x + 1)² dx.",["52.7","158","26.3","105"],0,
  [GRAPH,["graph",["(2x+1)^2"],[-0.5,3.5,-5,50]],["intg",0,1,3]],
  "[(2x + 1)^{3}/6] from 1 to 3 = (343 − 27)/6 = 52.7.",52.66667),
Q("m68","5.3","Find the area of the region enclosed by y = x² and y = x + 2.",["4.5","3.33","9","1.17"],0,
  [GRAPH,["graph",["x^2","x+2","abs(x+2−x^2)"],[-2,3,-1,6]],["isct",0,1,-1],["isct",0,1,2],["intg",2,-1,2]],
  "The curves meet at x = −1 and x = 2. Area = ∫_{−1}^{2} (x + 2 − x^{2}) dx = 4.5.",4.5),
Q("m69","5.3","Find ∫ (6x² − 4/x) dx.",["2x³ − 4 ln|x| + C","12x + 4x^{−2} + C","2x³ + 4x^{−2} + C","6x³ − 4 ln|x| + C"],0,
  [["note","Check numerically: the definite integral from 1 to 2 should match F(2) − F(1)"],GRAPH,["graph",["6x^2−4÷x"],[0.5,3,-5,50]],["intg",0,1,2],RUN,["run","2×2^3−4ln(2)−(2×1^3−4ln(1))"]],
  "∫6x^{2} dx = 2x^{3} and ∫4/x dx = 4 ln|x|, so the answer is 2x^{3} − 4 ln|x| + C.",11.22741),
Q("m70","5.4","The region under y = √x for 0 ≤ x ≤ 4 is rotated 360° about the x-axis. Find the volume.",["8π","4π","16π/3","16π"],0,
  [["note","V = π∫y² dx = ∫πx dx"],GRAPH,["graph",["πx"],[-0.5,4.5,-1,14]],["intg",0,0,4],RUN,["run","8π"]],
  "V = π∫_{0}^{4} x dx = π[x^{2}/2] = 8π = 25.1.",25.13274,HL),
Q("m71","5.4","Find ∫_{0}^{1} xe^{x} dx.",["1","e","e − 1","2e − 1"],0,
  [GRAPH,["graph",["xe^x"],[-0.5,1.5,-0.5,5]],["intg",0,0,1]],
  "By parts: ∫xe^{x} dx = xe^{x} − e^{x}, and [xe^{x} − e^{x}]_{0}^{1} = 0 − (−1) = 1.",1,HL),
Q("m72","5.4","Find the limit of sin(3x)/x as x → 0.",["3","1","0","1/3"],0,
  [RAD,["note","Evaluate very close to x = 0"],RUN,["run","sin(3×0.0001)÷0.0001"]],
  "L'Hôpital's rule: the limit is 3cos(0)/1 = 3.",3,HL),
Q("m73","5.4","Solve dy/dx = 2xy with y(0) = 3, then find y(1).",["3e","3e²","e + 2","6"],0,
  [["note","Separate the variables: ln|y| = x² + c, so y = 3e^(x²)"],RUN,["run","3e^(1^2)"]],
  "∫dy/y = ∫2x dx gives ln|y| = x^{2} + c, and y(0) = 3 gives y = 3e^{x²}. So y(1) = 3e = 8.15.",8.154845,HL),
];

/* ================= the number line ================= */
const BANDS = [
  {name:"Natural numbers",  zone:"ℕ · natural numbers",  from:0,  to:40,  hue:200, bg:["#0b1424","#0c1830"]},
  {name:"Integers",         zone:"ℤ · integers",         from:40, to:100, hue:175, bg:["#0c1830","#0b1c30"]},
  {name:"Rational numbers", zone:"ℚ · rationals",        from:100,to:170, hue:145, bg:["#0b1c30","#0c2028"]},
  {name:"Real numbers",     zone:"ℝ · π, e and √2",      from:170,to:250, hue:48,  bg:["#0c2028","#1a1a24"]},
  {name:"Algebra",          zone:"Algebra",              from:250,to:320, hue:28,  bg:["#1a1a24","#22142a"]},
  {name:"Functions",        zone:"Functions",            from:320,to:390, hue:330, bg:["#22142a","#1e1034"]},
  {name:"Trigonometry",     zone:"Trigonometry",         from:390,to:460, hue:290, bg:["#1e1034","#160e3a"]},
  {name:"Calculus",         zone:"Calculus",             from:460,to:530, hue:258, bg:["#160e3a","#0e1040"]},
  {name:"The complex plane",zone:"ℂ · the complex plane",from:530,to:600, hue:215, bg:["#0e1040","#080c2c"]},
  {name:"Infinity",         zone:"∞ · towards infinity", from:600,to:760, hue:188, bg:["#080c2c","#02030c"]},
];
/* the meter is the number itself: 1 at the start, a googol (10¹⁰⁰) at 700 */
function fmtN(p){
  const e = Math.max(0, p) / 7;
  if (e < 6) return Math.round(Math.pow(10, e)).toLocaleString("en-GB");
  const ex = Math.floor(e + 1e-9), m = Math.pow(10, e - ex);
  if (Math.abs(e - 100) < 1e-6) return "1 googol";
  return `${m.toFixed(1)}×10${sup(ex)}`;
}
const FACTS = [
  [-30,"Scipa switches on at 1"],[7,"10 · fingers on two hands"],[14,"100 · a century"],[21,"1,000 · kilo-"],[42,"1,000,000 · a million"],[52.5,"31.5 million · seconds in a year"],
  [63,"one billion"],[69.3,"8 billion · people on Earth"],[84,"one trillion"],[105,"10¹⁵ · one quadrillion"],[132,"≈10¹⁹ · grains of sand on Earth"],[137.4,"4.3 × 10¹⁹ · ways to scramble a Rubik's cube"],
  [166.5,"6.02 × 10²³ · Avogadro's number"],[195,"≈7 × 10²⁷ · atoms in a human body"],[233,"10³³ · a decillion"],
  [351,"≈10⁵⁰ · atoms that make up the Earth"],[427,"≈10⁶¹ · Planck times since the Big Bang"],[475.4,"52! ≈ 8 × 10⁶⁷ · ways to shuffle a deck of cards"],
  [560,"≈10⁸⁰ · atoms in the observable universe"],[700,"10¹⁰⁰ · a googol"],[740,"a googolplex is 10^googol · Scipa keeps going"],
];
const at = (x, y, inner) => `<g transform="translate(${f1(x)} ${f1(y)})">${inner}</g>`;
const TX = (x, y, t, size, fill, op = 1, extra = "") => `<text x="${f1(x)}" y="${f1(y)}" font-family="Georgia,'Times New Roman',serif" font-size="${size}" fill="${fill}" opacity="${op}" text-anchor="middle"${extra}>${t}</text>`;
const LINE_Y = 344;
/* each layer: what lives along that stretch of the number line */
function scene(i, len){
  const r = srand(3301 + i * 59), b = BANDS[i], c = `hsl(${b.hue} 85% 68%)`, cs = `hsl(${b.hue} 70% 55%)`;
  let s = "";
  // big faint symbol for the layer
  const BIGS = ["ℕ","ℤ","ℚ","ℝ","x","f","θ","∫","ℂ","∞"];
  s += TX(len * .5, 250, BIGS[i], 300, c, .05, ` font-style="${i===4||i===5?"italic":"normal"}"`);
  // the number line itself, with ticks and labels for this layer
  const LABELS = [["1","2","3","4","5","6","7","8"],["−3","−2","−1","0","1","2","3","−7"],["½","¾","⅔","0.25","−⅓","7/8","1.5","⅝"],["π","e","√2","φ","√3","ln 2","τ","γ"],
    ["x","2x + 1","x²","a + b","(x + 1)²","ab","x³","y = mx + c"],["f(x)","g(x)","f∘g","f⁻¹","eˣ","ln x","|x|","1/x"],["sin θ","cos θ","tan θ","π/6","π/4","π/3","2π","sec θ"],
    ["dy/dx","∫ dx","f′(x)","lim","Σ","eˣ","d²y/dx²","∂"],["i","3 + 4i","e^(iπ)","−1","|z|","arg z","z̄","re^(iθ)"],["∞","ℵ₀","ℵ₁","ω","∞ + 1","c","10¹⁰⁰","∞"]];
  const n = Math.max(4, Math.round(len / 150));
  s += `<path d="M0 ${LINE_Y} H${len}" stroke="${c}" stroke-width="3" opacity=".8"/>`;
  for (let k = 0; k < n; k++){ const x = (k + .5) * len / n;
    s += `<path d="M${f1(x)} ${LINE_Y - 9} v18" stroke="${c}" stroke-width="2.5"/>` + TX(x, LINE_Y + 34, LABELS[i][k % 8], 17, c, .85); }
  for (let k = 0; k < n * 4; k++){ const x = k * len / (n * 4); s += `<path d="M${f1(x)} ${LINE_Y - 4} v8" stroke="${c}" stroke-width="1" opacity=".5"/>`; }
  // floating symbols drifting above the line
  const SYM = ["+","−","×","÷","=","π","√","∑","∫","∞","%","±","θ","Δ","λ","≠"];
  for (let k = 0; k < Math.round(len / 120); k++) s += at(r() * len, 40 + r() * 230, `<g class="fl" style="animation-delay:-${f1(r()*4)}s;animation-duration:${f1(3+r()*3)}s">${TX(0, 0, SYM[Math.floor(r()*SYM.length)], f1(16 + r()*22), c, f1(.18 + r()*.25))}</g>`);
  const X = f => f1(len * f);
  switch(i){
    case 0: // counting: tally marks and an abacus
      s += at(len * .22, 220, `<g class="sw">${[0,1,2,3].map(k=>`<path d="M${k*14} 0 v-46" stroke="#e8f2ff" stroke-width="5" stroke-linecap="round" opacity=".7"/>`).join("")}<path d="M-8 -8 L52 -38" stroke="#ff8a7a" stroke-width="5" stroke-linecap="round"/></g>`)
        + at(len * .7, 150, `<rect x="-90" y="-60" width="180" height="120" rx="8" fill="none" stroke="#8a5a2a" stroke-width="8"/>${[0,1,2,3].map(row=>`<path d="M-86 ${-36+row*24} H86" stroke="#c8a070" stroke-width="2"/>${Array.from({length:5},(_,k)=>`<circle class="fl" style="animation-duration:${2+row*.5}s;animation-delay:-${k*.3}s" cx="${-70+k*18+row*8}" cy="${-36+row*24}" r="8" fill="hsl(${(row*70+10)%360} 75% 60%)"/>`).join("")}`).join("")}`);
      break;
    case 1: // integers: a thermometer below zero and a staircase going down
      s += at(len * .25, 280, `<rect x="-10" y="-200" width="20" height="200" rx="10" fill="#1a2a3a" stroke="#cfe0f0" stroke-width="3"/><circle cy="10" r="20" fill="#3a8aff"/><rect class="pulse" x="-5" y="-60" width="10" height="70" fill="#3a8aff"/>${[0,1,2,3,4].map(k=>`<path d="M12 ${-180+k*40} h10" stroke="#cfe0f0" stroke-width="2"/><text x="28" y="${-176+k*40}" font-size="13" fill="#cfe0f0" font-family="Georgia">${10-k*5}°</text>`).join("")}`)
        + at(len * .65, 120, Array.from({length:6},(_,k)=>`<rect x="${k*30}" y="${k*22}" width="30" height="22" fill="${k<3?"#3a6aa8":"#a83a5a"}" opacity=".55"/>`).join("") + TX(95, -10, "+3 + (−5) = −2", 20, c, .8));
      break;
    case 2: // fractions: pies and a fraction wall
      s += [[.2,120,3],[.45,200,4],[.78,110,8]].map(([f,y,parts])=>at(len*f, y, `<g class="spin" style="animation-duration:${18+parts*3}s"><circle r="44" fill="#123" stroke="${c}" stroke-width="3"/>${Array.from({length:parts},(_,k)=>`<path d="M0 0 L${f1(44*Math.cos(k/parts*6.283))} ${f1(44*Math.sin(k/parts*6.283))}" stroke="${c}" stroke-width="2"/>`).join("")}<path d="M0 0 L44 0 A44 44 0 0 1 ${f1(44*Math.cos(6.283/parts))} ${f1(44*Math.sin(6.283/parts))}Z" fill="${cs}" opacity=".7"/></g>`)).join("")
        + at(len * .52, 60, [1,2,3,4].map(k=>Array.from({length:k},(_,j)=>`<rect x="${j*200/k}" y="${k*20}" width="${200/k - 3}" height="17" fill="${cs}" opacity="${.2+k*.1}"/>`).join("")).join("") + TX(100, 115, "½ = 2/4", 16, c, .8));
      break;
    case 3: // π, e, √2: a circle unrolling its circumference, a unit square's diagonal, a golden spiral
      s += at(len * .2, 200, `<circle r="40" fill="none" stroke="${c}" stroke-width="3"/><path d="M-40 0 H40" stroke="${c}" stroke-width="2" stroke-dasharray="4 4"/><path class="sp-grow" pathLength="1" style="animation-iteration-count:infinite;animation-duration:4s" d="M-40 60 H211" stroke="#ffd25a" stroke-width="4"/>` + TX(85, 88, "π = 3.14159265…", 18, "#ffd25a", .9))
        + at(len * .55, 150, `<rect x="0" y="0" width="80" height="80" fill="none" stroke="${c}" stroke-width="3"/><path d="M0 80 L80 0" stroke="#ff8a7a" stroke-width="3"/>` + TX(50, 32, "√2", 20, "#ff8a7a"))
        + at(len * .82, 190, `<g class="spin" style="animation-duration:40s"><path d="M0 0 a8 8 0 0 1 8 -8 a13 13 0 0 1 13 13 a21 21 0 0 1 -21 21 a34 34 0 0 1 -34 -34 a55 55 0 0 1 55 -55" fill="none" stroke="#ffd25a" stroke-width="3"/></g>` + TX(0, 90, "φ = 1.618…", 16, "#ffd25a", .8))
        + TX(len * .5, 300, "e = 2.718281828…", 18, c, .7);
      break;
    case 4: // algebra: a balance and floating equations
      s += at(len * .3, 230, `<path d="M0 0 v-120 M-90 -120 H90" stroke="#cfe0f0" stroke-width="4"/><path d="M-30 0 h60" stroke="#cfe0f0" stroke-width="6"/><g class="sw" style="transform-origin:0 -120px"><path d="M-90 -120 l-26 50 h52z M90 -120 l-26 50 h52z" fill="none" stroke="${c}" stroke-width="2"/>${TX(-90,-56,"2x + 3",16,c)}${TX(90,-56,"11",16,c)}</g>`)
        + ["x² + 5x + 6 = 0","(x + 2)(x + 3)","a² − b² = (a − b)(a + b)","x = −b ± √(b² − 4ac) ⁄ 2a"].map((t,k)=>at(len*(.55+k%2*.2), 70+k*50, `<g class="dx" style="animation-delay:-${k*3}s">${TX(0,0,t,17+k%2*3,c,.75," font-style='italic'")}</g>`)).join("");
      break;
    case 5: // functions: curves draw themselves on little axes
      s += [[.18,"M-60 40 Q0 -100 60 40","#ff8ac8"],[.5,"M-60 50 C-20 48 20 30 60 -60","#ffd25a"],[.8,"M-60 -40 C-30 40 0 -40 30 30 S50 -20 60 0","#7ad8ff"]].map(([f,d,col],k)=>at(len*f, 170, `<path d="M-70 0 H70 M0 -80 V80" stroke="#cfe0f0" stroke-width="1.5" opacity=".5"/><path class="sp-grow" pathLength="1" style="animation-iteration-count:infinite;animation-duration:${3+k}s" d="${d}" stroke="${col}" stroke-width="3.5" fill="none"/>`)).join("")
        + at(len * .35, 60, TX(0, 0, "f(x) = x²", 18, "#ff8ac8") + TX(170, 10, "g(x) = eˣ", 18, "#ffd25a"));
      break;
    case 6: // trigonometry: a unit circle drives a sine wave
      s += at(len * .2, 190, `<circle r="70" fill="none" stroke="${c}" stroke-width="2.5"/><path d="M-80 0 H80 M0 -80 V80" stroke="#cfe0f0" stroke-width="1" opacity=".5"/><g class="spin" style="animation-duration:6s"><circle r="72" fill="none"/><path d="M0 0 L70 0" stroke="#ffd25a" stroke-width="3"/><circle cx="70" r="6" fill="#ffd25a"/></g>`)
        + at(len * .36, 190, `<g class="wave" style="animation-duration:3s"><path d="${Array.from({length:61},(_,k)=>`${k?"L":"M"}${k*8} ${f1(-60*Math.sin(k/60*4*Math.PI))}`).join(" ")}" stroke="#ffd25a" stroke-width="3" fill="none"/><path d="${Array.from({length:61},(_,k)=>`${k?"L":"M"}${k*8} ${f1(-60*Math.cos(k/60*4*Math.PI))}`).join(" ")}" stroke="#ff8ac8" stroke-width="2" fill="none" opacity=".7"/></g>`)
        + TX(len * .7, 80, "sin²θ + cos²θ = 1", 20, c, .8);
      break;
    case 7: { // calculus: a tangent rides along a curve and the area under it glows
      const g = u => -(50 + .006*(u - 20)*(u - 20)), sl = u => -.012*(u - 20);
      const curve = Array.from({length:34},(_,k)=>`${k?"L":"M"}${-150+k*10} ${f1(g(-150+k*10))}`).join(" ");
      const area = "M-60 0 " + Array.from({length:21},(_,k)=>`L${-60+k*10} ${f1(g(-60+k*10))}`).join(" ") + " L140 0Z";
      const tan = u => `M${u-70} ${f1(g(u) - 70*sl(u))} L${u+70} ${f1(g(u) + 70*sl(u))}`;
      s += at(len * .3, 290, `<path d="M-160 0 H200 M-150 10 V-230" stroke="#cfe0f0" stroke-width="1.5" opacity=".5"/><path class="blink" style="animation-duration:3s" d="${area}" fill="${cs}" opacity=".35"/><path d="${curve}" stroke="#ffd25a" stroke-width="3" fill="none"/>
          <path d="${tan(100)}" stroke="#ff8ac8" stroke-width="2.5"/><circle cx="100" cy="${f1(g(100))}" r="5" fill="#ff8ac8"/><path d="${tan(-80)}" stroke="#ff8ac8" stroke-width="2.5" opacity=".6"/><circle cx="-80" cy="${f1(g(-80))}" r="5" fill="#ff8ac8" opacity=".6"/>`)
        + [0,1,2,3,4,5].map(k=>at(len*.62 + k*26, 300, `<rect class="blink" style="animation-delay:${k*.2}s" x="0" y="${-40-k*18}" width="22" height="${40+k*18}" fill="${cs}" opacity=".45" stroke="${c}"/>`)).join("") + TX(len * .7, 110, "∫ₐᵇ f(x) dx", 26, c, .85);
      break; }
    case 8: // the complex plane: an Argand diagram with a spinning vector
      s += at(len * .3, 180, `<path d="M-140 0 H140 M0 -130 V130" stroke="#cfe0f0" stroke-width="1.5" opacity=".6"/>${TX(130,-8,"Re",14,"#cfe0f0")}${TX(14,-118,"Im",14,"#cfe0f0")}<g class="spin" style="animation-duration:9s"><circle r="102" fill="none"/><path d="M0 0 L60 -80" stroke="#ffd25a" stroke-width="3"/><circle cx="60" cy="-80" r="6" fill="#ffd25a"/></g><circle r="100" fill="none" stroke="${c}" stroke-dasharray="4 6" opacity=".6"/>`)
        + TX(len * .7, 120, `e<tspan baseline-shift="super" font-size="15">iπ</tspan> + 1 = 0`, 24, c, .9) + TX(len * .72, 170, "i² = −1", 20, "#ffd25a", .8);
      break;
    case 9: // infinity: a Sierpiński triangle and infinity signs
      { const tri = (x, y, sz, d) => d === 0 ? `<path d="M${f1(x)} ${f1(y)} l${f1(sz/2)} ${f1(-sz*.866)} l${f1(sz/2)} ${f1(sz*.866)}z" fill="${c}" opacity=".5"/>` : tri(x, y, sz/2, d-1) + tri(x+sz/2, y, sz/2, d-1) + tri(x+sz/4, y-sz*.433, sz/2, d-1);
        s += at(len * .15, 290, `<g class="pulse" style="animation-duration:6s">${tri(0, 0, 220, 4)}</g>`)
          + Array.from({length:Math.round(len/260)},()=>at(r()*len, 60 + r()*200, `<g class="spin" style="animation-duration:${f1(20+r()*20)}s">${TX(0, 12, "∞", f1(30+r()*60), c, f1(.3+r()*.4))}</g>`)).join(""); }
      break;
  }
  return hscene(s, len);
}
/* Scipa: a little graphic calculator with a face on its screen. It brightens and grows arms and a halo as it travels. */
function avatar(level, hue){
  const lv = Math.max(0, Math.min(10, level)), glow = `hsl(${hue} 80% ${lv >= 5 ? 75 : 68}%)`;
  const eyes = lv === 0 ? `<path d="M-9 -15 h5 M4 -15 h5" stroke="#1a2a24" stroke-width="2" stroke-linecap="round"/>` : `<g class="av-blink"><ellipse cx="-6.5" cy="-15" rx="2.2" ry="${lv >= 6 ? 3 : 2.6}" fill="#1a2a24"/><ellipse cx="6.5" cy="-15" rx="2.2" ry="${lv >= 6 ? 3 : 2.6}" fill="#1a2a24"/></g>`;
  const mouth = lv === 0 ? `<path d="M-4 -8 h8" stroke="#1a2a24" stroke-width="1.8" stroke-linecap="round"/>` : `<path d="M-6 -9 q6 ${lv >= 6 ? 7 : 4} 12 0" stroke="#1a2a24" stroke-width="1.8" fill="${lv >= 6 ? "#1a2a24" : "none"}" stroke-linecap="round"/>`;
  const keys = Array.from({length:12},(_,k)=>`<rect x="${-14 + (k%3)*10}" y="${2 + Math.floor(k/3)*6.5}" width="8" height="4.6" rx="1.2" fill="${k===11 ? glow : k%3===2 ? "#5a6a7a" : "#2a3440"}"/>`).join("");
  const arms = lv >= 4 ? `<path d="M-20 4 q-10 -2 -14 -12 M20 4 q10 -2 14 -12" stroke="#cfd8e2" stroke-width="3" fill="none" stroke-linecap="round" class="av-tip"/>` : "";
  const halo = lv >= 8 ? `<g class="blink"><text x="0" y="-34" text-anchor="middle" font-family="Georgia" font-size="16" fill="${glow}">∞</text></g>` : "";
  const sparks = lv >= 9 ? [-26,26].map((x,k)=>`<text x="${x}" y="${-18+k*8}" font-size="10" fill="${glow}" class="blink" style="animation-delay:${k*.4}s" text-anchor="middle">✦</text>`).join("") : "";
  return avatarSVG(`${halo}${sparks}<g class="${lv >= 1 ? "av-hover" : ""}">${arms}<rect x="-19" y="-30" width="38" height="58" rx="8" fill="#33404e" stroke="#cfd8e2" stroke-width="2"/>
    <rect x="-15" y="-25" width="30" height="21" rx="3" fill="${lv === 0 ? "#6a7a70" : glow}"/>${eyes}${mouth}${keys}<path d="M-10 28 v6 M10 28 v6" stroke="#cfd8e2" stroke-width="3" stroke-linecap="round"/>
    <text x="0" y="-27" text-anchor="middle" font-family="Arial" font-size="3.4" font-weight="700" fill="#cfd8e2">SCIPA</text></g>`);
}
function entity(t, c){
  const W = (w, h, inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`, T = (x, y, s, sz, col, extra = "") => `<text x="${x}" y="${y}" text-anchor="middle" font-family="Georgia,serif" font-size="${sz}" fill="${col}"${extra}>${s}</text>`;
  if (t === "gem") return W(220,110,`<circle cx="110" cy="55" r="50" fill="${c}" opacity=".16" class="pulse"/>${T(110,72,"10¹⁰⁰",52,"#fff",' font-weight="700"')}${T(110,100,"one googol",13,c)}${[[20,30],[196,24],[30,90],[190,88]].map(([x,y],k)=>`<text x="${x}" y="${y}" font-size="14" fill="${c}" class="blink" style="animation-delay:${k*.3}s">✦</text>`).join("")}`);
  if (t === "rootkit") return W(200,100,`${T(100,70,"∎",56,c)}${T(100,94,"Q.E.D.",14,c,' letter-spacing="4"')}`);
  if (t === "trojan") return W(200,100,`${T(100,74,"✓",64,c)}`);
  if (t === "adware") return W(200,100,`${T(70,70,"✗",40,"#7b8b95")}${T(130,72,"✓",54,c)}`);
  if (t === "spam") return W(200,100,`${T(100,70,"≈",60,c)}`);
  if (t === "blocked") return W(200,100,`<rect x="40" y="18" width="120" height="64" rx="8" fill="#2a3440" stroke="${c}" stroke-width="3"/><rect x="52" y="28" width="96" height="30" rx="3" fill="#8a9a90"/>${T(100,49,"Math ERROR",14,"#1a2a24",' font-family="monospace" font-weight="700"')}${T(100,76,"✗",14,"#ff5470")}`);
  return null;
}

registerSubject({
  key:"math", name:"Mathematics AA", theme:"Scipa the calculator rides the number line to infinity", gemWord:"Googol", gemTitle:"One in a Googol", emoji:"🧮",
  blurb:"You're <b>Scipa</b>, a little graphic calculator, switched on at 1. Every question is IB Analysis and Approaches, multiple choice, with <b>one minute</b> to answer. <b>Right first time and fast takes you furthest</b> along the number line, through the integers, π and e, functions, calculus and the complex plane towards a googol. A wrong answer gives you a second try, but Scipa will be disappointed. Afterwards Scipa shows you how to solve it on a GDC.",
  axis:"right", arrow:"▶",
  mcq:true, time:60, noBonus:true,
  tiers:{gem:"One in a Googol", rootkit:"Q.E.D.", trojan:"Solved", adware:"Second try", spam:"Just in time"}, blocked:"Math ERROR", fw:"MATH ERROR",
  notes:{gem:"Right first time in under 15 seconds. One in a googol!", rootkit:"Right first time, and quickly.", trojan:"Right first time.", adware:"Right on your second try.", spam:"Right on your second try, with the clock nearly out."},
  ladder:{gem:"Right first time within 15 seconds", rootkit:"Right first time within 35 seconds", trojan:"Right first time", adware:"Right on the second try within 40 seconds", spam:"Right on the second try", blocked:"Wrong twice, or out of time"},
  verbs:{cta:"Next ▶", inject:"Answer", hint:"▶ right first time and fast goes furthest ▶", count:"Scipa is warming up"},
  particles:["π","∑","√","∞"], particleColor:"#7ad8ff",
  ambient:{kind:"glyph", c:["122 216 255","255 220 120","210 170 255"], n:30, chars:["π","∑","∫","√","∞","θ","e","i","Δ","x²","±","÷","≠","λ","∂","φ"], alpha:.45},
  meter:{label:"NUMBER", fmt:fmtN, zone:fmtN, tick:fmtN, gain:(a,b)=>`count up to ${fmtN(b)}`},
  shout:t=>({gem:"∎ Q.E.D.!", rootkit:"Elegant!", trojan:"Correct.", adware:"Phew.", spam:"Just made it…"})[t] || null,
  start:{bg:"linear-gradient(90deg,#070b14,#0b1424)", label:"Start · 1", zone:"Switched on", color:"#7ad8ff",
    deco:len=>hscene(`<rect x="0" y="${LINE_Y}" width="${len}" height="${420-LINE_Y}" fill="#3a2a1e"/><rect x="0" y="${LINE_Y-6}" width="${len}" height="8" fill="#5a4030"/>`
      + at(len - 420, LINE_Y - 6, `<rect x="0" y="-16" width="150" height="16" rx="2" fill="#e8e0cc"/><rect x="6" y="-30" width="140" height="14" rx="2" fill="#2a5a9a"/>${TX(76,-19,"IB formula booklet",9,"#e8eef8")}`)
      + at(len - 220, LINE_Y - 10, `<path d="M0 0 L120 -18" stroke="#f0c040" stroke-width="7" stroke-linecap="round"/><path d="M120 -18 l12 -2 l-10 6z" fill="#2a2a2a"/>`)
      + TX(len - 600, 120, "0", 200, "#7ad8ff", .06) + `<path d="M0 ${LINE_Y+40} H${len}" stroke="#7ad8ff" stroke-width="2" opacity=".2"/>`, len)},
  endBg:"linear-gradient(90deg,#02030c,#000)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  extras:()=>`<div class="m-grid" aria-hidden="true"></div>`,
  beyond:"Beyond a googol",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
