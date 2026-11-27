/* Mathematics: applications and interpretation — a survey drone flies across a city, collecting data as it goes:
   bar-chart suburbs, a scatter-plot park, histogram skyscrapers, a bell-curve stadium, a sine-wave harbour, the
   market, a graph-theory metro, Voronoi fields and finally the cloud. Rarer answers fly further and collect more data.
   Syllabus: IB Mathematics: applications and interpretation (first assessment 2021), topics 1–5. The topic groupings are
   this game's; HL-only topics are marked. Answers are typed (Mathematics AA is the multiple-choice course). */
(function(){
const CATALOG = [
  {label:"IB Mathematics: Applications and Interpretation · SL and HL", units:[
    {code:"1", name:"Number and algebra", topics:[["1.1","Numbers, approximation and errors"],["1.2","Sequences, series and finance"],["1.3","Logarithms, complex numbers and matrices",HL]]},
    {code:"2", name:"Functions", topics:[["2.1","Lines and key features of graphs"],["2.2","Modelling with functions"],["2.3","Transformations and further modelling",HL]]},
    {code:"3", name:"Geometry and trigonometry", topics:[["3.1","Triangles, 3D shapes and bearings"],["3.2","Voronoi diagrams"],["3.3","Vectors and matrix transformations",HL],["3.4","Graph theory",HL]]},
    {code:"4", name:"Statistics and probability", topics:[["4.1","Sampling and data collection"],["4.2","Presenting and summarizing data"],["4.3","Correlation and regression"],["4.4","Probability"],["4.5","Probability distributions"],["4.6","Hypothesis testing"],["4.7","Further statistics",HL]]},
    {code:"5", name:"Calculus", topics:[["5.1","Differentiation and optimization"],["5.2","Integration and the trapezoidal rule"],["5.3","Differential equations and kinematics",HL]]},
  ]},
];

const PROMPTS = [
/* ---------- 1 Number and algebra ---------- */
P("mi001","1.1","Name a way of rounding or approximating a number.","Banker's rounding",[
  ["Decimal places",20,"dp","rounding to decimal places"],["Significant figures",20,"sf","sig figs","significant figure"],["Standard form",15,"scientific notation","a x 10 k"],
  ["Rounding to the nearest whole number",10,"nearest integer","nearest whole number","rounding"],["Estimation",8,"estimating","estimate"],["Upper bound",6],["Lower bound",6],["Truncation",3,"truncating"],
  ["Banker's rounding",.4,"round half to even","bankers rounding"]]),
P("mi002","1.1","Name a quantity often written in standard form.","Planck length",[
  ["Speed of light",15,"3 x 10 8"],["World population",10,"population of the world"],["Avogadro's number",10,"avogadro","avogadro constant"],["Distance to the Sun",10,"distance from earth to sun","astronomical unit"],
  ["Mass of the Earth",8,"earth s mass"],["Mass of an electron",8,"electron mass"],["Size of an atom",8,"atom","diameter of an atom"],["Age of the universe",6],["National debt",6,"gdp","government debt"],
  ["Diameter of a cell",5,"cell size","bacteria size"],["Number of stars",4,"stars in the galaxy"],["Planck length",.4]]),
P("mi003","1.2","Name a type of sequence or series.","Look-and-say sequence",[
  ["Arithmetic",25,"arithmetic sequence","arithmetic series","arithmetic progression"],["Geometric",25,"geometric sequence","geometric series","geometric progression"],["Fibonacci",12,"fibonacci sequence"],
  ["Infinite geometric series",6,"infinite series","sum to infinity"],["Quadratic",5,"quadratic sequence"],["Triangular numbers",4,"triangular"],["Square numbers",4,"squares"],["Convergent",4,"converging"],
  ["Divergent",3,"diverging"],["Harmonic",3,"harmonic series"],["Look-and-say sequence",.4,"look and say","conway sequence"]]),
P("mi004","1.2","Name a financial term or calculation in IB Maths AI.","Annual equivalent rate",[
  ["Compound interest",25,"compounding"],["Depreciation",12,"depreciate"],["Simple interest",10],["Inflation",8],["Annuity",8,"annuities"],["Amortization",8,"amortisation"],["Loan repayments",8,"loan","mortgage","repayments"],
  ["Present value",6,"pv"],["Future value",6,"fv"],["Interest rate",6,"rate of interest"],["Currency conversion",6,"exchange rate","exchange rates"],["Percentage increase",4,"percentage change"],
  ["Annual equivalent rate",.4,"aer","effective annual rate","apr"]]),
P("mi005","1.2","Name a real situation modelled by a geometric sequence.","Folding paper",[
  ["Compound interest",20,"savings","investment"],["Population growth",18,"population"],["Depreciation of a car",15,"depreciation","car value"],["Bacteria doubling",12,"bacteria","cell division"],
  ["Radioactive decay",10,"half life","decay"],["Bouncing ball heights",8,"bouncing ball"],["Spread of a virus",8,"virus","epidemic"],["Chain letters",4,"pyramid scheme","chain messages"],
  ["Viral social media posts",4,"social media shares","going viral"],["Folding paper",.4,"paper folding","folding a sheet of paper"]]),
P("mi006","1.3","Name a law or use of logarithms.","Benford's law",[
  ["Power law",15,"log a n n log a"],["Product law",15,"log of a product"],["Quotient law",12,"log of a quotient"],["Solving exponential equations",12,"solving equations","exponential equations"],["Richter scale",10,"earthquakes"],
  ["pH scale",10,"ph","acidity"],["Decibels",8,"sound levels","decibel scale"],["Change of base",8,"change of base formula"],["Linearizing data",6,"log log graph","log scale","logarithmic scale"],
  ["Natural logarithm",6,"ln","natural log"],["Benford's law",.4,"benford","first digit law"]], [], HL),
P("mi007","1.3","Name a form or use of complex numbers.","Phasors",[
  ["Cartesian form",15,"a bi","rectangular form"],["Modulus–argument form",15,"polar form","modulus argument","r cis theta"],["Exponential form",12,"euler form","re i theta"],["Argand diagram",12,"argand"],
  ["Complex conjugate",8,"conjugate"],["Modulus",8],["Argument",8],["AC circuits",6,"impedance","electrical engineering","alternating current"],["Euler's identity",4,"e i pi 1 0","eulers identity"],["Phasors",.4,"phasor"]], [], HL),
P("mi008","1.3","Name a type of matrix or matrix operation.","Steady-state vector",[
  ["Inverse matrix",15,"inverse"],["Identity matrix",15,"identity"],["Determinant",15,"det"],["Matrix multiplication",12,"multiplication","multiplying matrices"],["Square matrix",6],["Transpose",6],
  ["Eigenvalues",6,"eigenvalue"],["Transition matrix",6,"markov matrix"],["Zero matrix",5],["Eigenvectors",5,"eigenvector"],["Adjacency matrix",5],["Diagonalization",3,"diagonalisation"],
  ["Steady-state vector",.4,"steady state","steady state vector"]], [], HL),
/* ---------- 2 Functions ---------- */
P("mi009","2.1","Name a key feature of a graph you might find using a GDC.","Period",[
  ["Zero",20,"x intercept","root","roots","zeros"],["y-intercept",15,"y intercept"],["Maximum",12,"max","local maximum"],["Minimum",12,"min","local minimum"],["Point of intersection",10,"intersection","intersect"],
  ["Vertical asymptote",8],["Horizontal asymptote",8,"asymptote"],["Gradient",6,"slope"],["Axis of symmetry",5,"line of symmetry"],["Domain",4],["Range",4],["Point of inflection",4,"inflection"],
  ["Period",.4,"period of a sine curve"]]),
P("mi010","2.1","Name a form of the equation of a straight line.","Intercept form",[
  ["Gradient–intercept form",30,"y mx c","slope intercept form","gradient intercept form","y mx b"],["Point–gradient form",15,"y y1 m x x1","point slope form","point gradient form"],
  ["General form",15,"ax by d 0","ax by c 0","standard form"],["Horizontal line",6,"y c","y constant"],["Vertical line",6,"x c","x constant"],["Two-point form",4,"two point form"],
  ["Intercept form",.4,"x a y b 1","double intercept form"]]),
P("mi011","2.2","Name a type of function used in mathematical modelling.","Gompertz function",[
  ["Linear",20,"linear model","linear function"],["Quadratic",18,"quadratic model","parabola"],["Exponential",18,"exponential model","exponential growth","exponential decay"],["Sinusoidal",10,"sine","cosine","trigonometric","trig"],
  ["Cubic",8,"cubic model"],["Logistic",6,"logistic model"],["Logarithmic",6,"log","natural log"],["Direct variation",4,"direct proportion"],["Inverse variation",4,"inverse proportion","reciprocal"],
  ["Piecewise",4,"piecewise function"],["Power",3,"power function"],["Gompertz function",.4,"gompertz"]]),
P("mi012","2.2","Name a real situation modelled by a quadratic function.","Free-fall distance",[
  ["Path of a projectile",25,"projectile","thrown ball","ball thrown","trajectory"],["Area of a rectangle",12,"area","fencing a field"],["Profit",10,"profit function"],["Bridge arch",8,"arch","suspension bridge","cable"],
  ["Stopping distance",6,"braking distance"],["Revenue",6,"revenue function"],["Satellite dish",6,"parabolic dish","parabolic mirror"],["Water fountain",6,"fountain","water jet"],
  ["Free-fall distance",.4,"falling object","distance fallen","galileo"]]),
P("mi013","2.2","Name a real situation modelled by a sinusoidal function.","Predator–prey cycles",[
  ["Tides",25,"tide","sea level"],["Ferris wheel height",15,"ferris wheel","big wheel"],["Daylight hours",15,"hours of daylight","sunrise times"],["Temperature over a year",12,"temperature","seasonal temperature"],
  ["Sound waves",8,"sound","music"],["Alternating current",6,"ac","electricity"],["Pendulum",6,"swinging pendulum"],["Seasonal sales",4,"sales"],["Predator–prey cycles",.4,"predator prey","lynx and hare"]]),
P("mi014","2.3","Name a transformation of a graph.","Log transformation",[
  ["Translation",25,"shift","horizontal translation","vertical translation"],["Vertical stretch",15,"stretch"],["Horizontal stretch",12,"horizontal compression"],["Reflection in the x-axis",12,"reflection","reflect in x axis"],
  ["Reflection in the y-axis",10,"reflect in y axis"],["Composite transformations",4,"combined transformations"],["Log transformation",.4,"logarithmic transformation","linearizing"]], [], HL),
P("mi015","2.3","Name a real situation modelled by a logistic function.","Tumour growth",[
  ["Population with a carrying capacity",25,"population growth","carrying capacity","population"],["Spread of a disease",15,"disease","epidemic","virus"],["Spread of a rumour",10,"rumour","rumor","gossip"],
  ["Sales of a new product",10,"product sales","sales"],["Technology adoption",8,"smartphone ownership","adoption of technology"],["Bacteria in a petri dish",8,"bacteria"],["Learning curve",4,"learning"],
  ["Tumour growth",.4,"tumor growth"]], [], HL),
/* ---------- 3 Geometry and trigonometry ---------- */
P("mi016","3.1","Name a rule or formula for solving a non-right-angled triangle.","Heron's formula",[
  ["Sine rule",30,"sine law","law of sines"],["Cosine rule",30,"cosine law","law of cosines"],["Area = ½ab sin C",20,"area formula","half ab sin c","1 2ab sin c","area of a triangle"],["Ambiguous case",6,"ambiguous case of the sine rule"],
  ["Heron's formula",.4,"heron","herons formula"]]),
P("mi017","3.1","Name a 3D solid whose volume or surface area you might calculate.","Frustum",[
  ["Cylinder",18],["Cuboid",15,"rectangular prism","box"],["Cone",15],["Sphere",15,"ball"],["Prism",10,"triangular prism"],["Pyramid",10,"square based pyramid"],["Cube",8],["Hemisphere",6],
  ["Tetrahedron",3],["Frustum",.4,"truncated cone"]]),
P("mi018","3.1","Name a term used in trigonometry problems about angles and directions.","Clinometer",[
  ["Bearing",20,"bearings","three figure bearing"],["Angle of elevation",20,"elevation"],["Angle of depression",18,"depression"],["SOHCAHTOA",10,"soh cah toa","trig ratios"],["Hypotenuse",6],
  ["Radian",6,"radians"],["True north",4,"north"],["Clinometer",.4]]),
P("mi019","3.2","Name a term used with Voronoi diagrams.","Delaunay triangulation",[
  ["Sites",15,"site","seeds","points"],["Cells",15,"cell","regions"],["Perpendicular bisector",15,"perpendicular bisectors","bisector"],["Edges",10,"edge","boundaries"],["Vertices",6,"vertex"],
  ["Nearest neighbour interpolation",8,"nearest neighbor interpolation","interpolation"],["Incremental algorithm",4,"adding a site"],["Delaunay triangulation",.4,"delaunay"]]),
P("mi020","3.2","Name a real use of Voronoi diagrams.","Animal territories",[
  ["Choosing where to open a shop",15,"locating a shop","new shop","new store","location of a business"],["The toxic waste dump problem",12,"toxic waste dump","largest empty circle","furthest point"],
  ["John Snow's cholera map",10,"john snow","cholera","cholera map"],["Mobile phone masts",8,"phone masts","cell towers","mobile network"],["School catchment areas",8,"catchment areas","nearest school"],
  ["Estimating rainfall",6,"rainfall","weather stations"],["Nearest hospital or fire station",6,"nearest hospital","emergency services","fire stations"],["Airport emergency landing",4,"nearest airport"],
  ["Animal territories",.4,"territories","fish nests","bird territories"]]),
P("mi021","3.3","Name a vector concept or operation.","Vector projection",[
  ["Magnitude",15,"length","modulus"],["Scalar product",15,"dot product"],["Vector product",12,"cross product"],["Unit vector",10],["Position vector",10],["Displacement",8,"displacement vector"],
  ["Velocity vector",8,"velocity"],["Parallel vectors",6,"parallel"],["Perpendicular vectors",6,"perpendicular"],["Vector equation of a line",6,"equation of a line"],["Components",5,"component form"],
  ["Vector projection",.4,"projection","component of a vector along another"]], [], HL),
P("mi022","3.3","Name a transformation that can be represented by a 2 × 2 matrix.","Projection onto a line",[
  ["Rotation",25,"rotate"],["Reflection",20,"reflect"],["Enlargement",18,"dilation","scaling"],["Stretch",12,"one way stretch"],["Shear",8],["Identity",4,"identity transformation"],["Projection onto a line",.4,"projection"]], [], HL),
P("mi023","3.4","Name a term from graph theory.","Handshaking lemma",[
  ["Vertex",15,"vertices","node","nodes"],["Edge",15,"edges","arc","arcs"],["Degree",10,"order of a vertex"],["Path",8],["Cycle",8,"circuit"],["Tree",8],["Spanning tree",8,"minimum spanning tree"],
  ["Weighted graph",8,"weights","weighted"],["Directed graph",6,"digraph","directed"],["Connected graph",6,"connected"],["Complete graph",5],["Eulerian circuit",5,"eulerian","euler circuit"],
  ["Hamiltonian cycle",5,"hamiltonian"],["Adjacency matrix",5],["Simple graph",4],["Planar graph",3,"planar"],["Subgraph",3],["Handshaking lemma",.4,"handshake lemma","handshaking"]], [], HL),
P("mi024","3.4","Name an algorithm or problem from graph theory.","Four colour theorem",[
  ["Kruskal's algorithm",20,"kruskal","kruskals"],["Prim's algorithm",20,"prim","prims"],["Chinese postman problem",15,"chinese postman","route inspection"],["Travelling salesman problem",15,"travelling salesman","traveling salesman","tsp"],
  ["Dijkstra's algorithm",10,"dijkstra","shortest path"],["Nearest neighbour algorithm",8,"nearest neighbour","nearest neighbor"],["Deleted vertex algorithm",6,"deleted vertex","lower bound"],
  ["Seven Bridges of Königsberg",6,"konigsberg","koenigsberg","bridges of konigsberg"],["Four colour theorem",.4,"four color theorem","map colouring"]], [], HL),
/* ---------- 4 Statistics and probability ---------- */
P("mi025","4.1","Name a sampling technique.","Multistage sampling",[
  ["Simple random sampling",25,"random","simple random","random sampling"],["Stratified sampling",15,"stratified"],["Systematic sampling",15,"systematic"],["Convenience sampling",15,"convenience","opportunity sampling"],
  ["Quota sampling",10,"quota"],["Cluster sampling",8,"cluster"],["Snowball sampling",3,"snowball"],["Multistage sampling",.4,"multi stage","multistage"]]),
P("mi026","4.1","Name a type of data, or a source of bias in data.","Survivorship bias",[
  ["Discrete data",15,"discrete"],["Continuous data",15,"continuous"],["Qualitative data",10,"categorical","qualitative"],["Quantitative data",10,"numerical","quantitative"],["Sampling bias",8,"biased sample","bias"],
  ["Primary data",6,"primary"],["Secondary data",6,"secondary"],["Outliers",6,"outlier"],["Non-response bias",4,"non response"],["Leading questions",4,"leading question"],["Ordinal data",3,"ordinal"],
  ["Survivorship bias",.4,"survivor bias"]]),
P("mi027","4.2","Name a way of presenting data.","Violin plot",[
  ["Histogram",18],["Box plot",18,"box and whisker","box and whisker plot","boxplot"],["Cumulative frequency graph",12,"cumulative frequency","ogive"],["Bar chart",12,"bar graph"],["Pie chart",10],
  ["Scatter diagram",10,"scatter graph","scatter plot","scattergram"],["Frequency table",8,"table"],["Stem-and-leaf diagram",6,"stem and leaf"],["Line graph",6,"time series graph"],["Violin plot",.4]]),
P("mi028","4.2","Name a measure of central tendency or dispersion.","Mid-range",[
  ["Mean",20,"average","arithmetic mean"],["Median",18],["Mode",12],["Interquartile range",12,"iqr"],["Standard deviation",12,"sd","sigma"],["Range",10],["Variance",6],["Quartiles",6,"lower quartile","upper quartile"],
  ["Percentiles",3,"percentile"],["Mid-range",.4,"midrange"]]),
P("mi029","4.2","Name a feature of a box plot, or the rule used to identify outliers.","Fences",[
  ["1.5 × IQR rule",20,"1.5 iqr","1 5 iqr","1.5 times the iqr","1.5 x iqr"],["Lower quartile",12,"q1"],["Upper quartile",12,"q3"],["Median",10,"median line"],["Whiskers",10,"whisker"],
  ["Interquartile range",8,"iqr","the box"],["Minimum",6,"lowest value"],["Maximum",6,"highest value"],["Fences",.4,"inner fences","outlier fences"]]),
P("mi030","4.3","Name a type or measure of correlation.","Kendall's tau",[
  ["Positive correlation",20,"positive"],["Negative correlation",20,"negative"],["Pearson's correlation coefficient",15,"pearson","pearson s r","r value","pmcc"],["Spearman's rank correlation",12,"spearman","spearmans rank"],
  ["No correlation",8,"zero correlation","none"],["Strong correlation",6,"strong"],["Weak correlation",6,"weak"],["Coefficient of determination",5,"r squared","r2"],["Kendall's tau",.4,"kendall","kendalls tau"]]),
P("mi031","4.3","Name a limitation or caution when interpreting correlation and regression.","Anscombe's quartet",[
  ["Correlation does not imply causation",30,"correlation is not causation","causation","not causal"],["Extrapolation is unreliable",20,"extrapolation","extrapolating"],["Outliers distort r",10,"outliers","outlier"],
  ["Only measures linear relationships",10,"only linear","non linear relationship","linear only"],["Small samples",6,"small sample size","sample size"],["Confounding variables",6,"third variable","confounding","hidden variable"],
  ["Use the y on x line to predict y",4,"regress y on x","y on x"],["Anscombe's quartet",.4,"anscombe"]]),
P("mi032","4.4","Name a concept or tool in probability.","Law of total probability",[
  ["Venn diagram",15,"venn"],["Tree diagram",15,"probability tree"],["Independent events",12,"independence","independent"],["Mutually exclusive events",12,"mutually exclusive"],["Conditional probability",12,"conditional"],
  ["Sample space",10,"sample space diagram"],["Complementary events",8,"complement"],["Expected value",6,"expectation"],["Relative frequency",6,"experimental probability"],["Two-way table",6,"contingency table","two way table"],
  ["Theoretical probability",4,"theoretical"],["Law of total probability",.4,"total probability"]]),
P("mi033","4.4","Name a classic probability experiment or game.","Buffon's needle",[
  ["Rolling a die",25,"dice","die","rolling dice"],["Tossing a coin",25,"coin","flipping a coin","coin toss"],["Drawing cards",15,"cards","deck of cards","playing cards"],["Spinning a spinner",10,"spinner"],
  ["Picking balls from a bag",10,"balls in a bag","marbles","beads from a bag"],["Lottery",6,"lotto"],["Monty Hall problem",4,"monty hall"],["Roulette",4],["Birthday problem",3,"birthday paradox"],
  ["Buffon's needle",.4,"buffon","buffons needle"]]),
P("mi034","4.5","Name a probability distribution.","Bernoulli distribution",[
  ["Normal",30,"normal distribution","gaussian","bell curve"],["Binomial",25,"binomial distribution"],["Poisson",10,"poisson distribution"],["Uniform",6,"uniform distribution"],["Discrete distribution",4,"discrete"],
  ["Geometric",3,"geometric distribution"],["Exponential",3,"exponential distribution"],["Chi-squared",3,"chi squared","chi square"],["t-distribution",3,"t distribution","student s t"],
  ["Bernoulli distribution",.4,"bernoulli"]]),
P("mi035","4.5","Name a condition for a binomial distribution.","Sampling with replacement",[
  ["Fixed number of trials",25,"fixed n","fixed number","n trials"],["Two outcomes",25,"success or failure","success and failure","two possible outcomes"],["Constant probability",20,"same probability","probability stays the same","constant p"],
  ["Independent trials",20,"independent","independence"],["Sampling with replacement",.4,"with replacement"]]),
P("mi036","4.5","Name a real variable often modelled by a normal distribution.","Ball bearing diameters",[
  ["Height",25,"heights","human height"],["Weight",15,"mass","body mass"],["Test scores",15,"iq","exam marks","exam results","iq scores"],["Birth weight",8,"baby weight","birth weights"],
  ["Lengths of manufactured parts",8,"manufacturing","machine parts","bolts"],["Blood pressure",6],["Measurement errors",6,"errors"],["Arm span",4,"arm length"],["Ball bearing diameters",.4,"ball bearings"]]),
P("mi037","4.6","Name a statistical test used in IB Maths AI.","Paired t-test",[
  ["Chi-squared test for independence",25,"chi squared test","chi square test","test for independence","χ2 test"],["Chi-squared goodness of fit test",18,"goodness of fit"],["t-test",15,"t test","two sample t test"],
  ["Test for correlation",6,"pearson test","hypothesis test for r"],["Spearman's rank test",4,"spearman test"],["Binomial test",4],["Poisson test",3],["Paired t-test",.4,"paired t test","paired sample t test"]]),
P("mi038","4.6","Name a term used in hypothesis testing.","Power of a test",[
  ["Null hypothesis",20,"h0","h 0","h nought"],["Alternative hypothesis",15,"h1","h 1"],["p-value",15,"p value"],["Significance level",15,"level of significance","5% significance"],["Degrees of freedom",10,"df"],
  ["Critical value",8,"critical region"],["Expected frequency",8,"expected frequencies","expected values"],["Observed frequency",6,"observed frequencies","observed values"],["Contingency table",6,"two way table"],
  ["Test statistic",6],["Type I error",5,"type 1 error"],["Type II error",4,"type 2 error"],["Power of a test",.4,"statistical power","power"]]),
P("mi039","4.7","Name a concept from HL statistics.","Regular Markov chain",[
  ["Central limit theorem",15,"clt"],["Confidence interval",15,"confidence intervals"],["Poisson distribution",15,"poisson"],["Markov chain",10,"markov chains","markov"],["Transition matrix",10,"transition matrices"],
  ["Steady state",6,"long term state","stationary distribution"],["Type II error",6,"type 2 error"],["Non-linear regression",6,"non linear regression","exponential regression"],["Unbiased estimator",6,"unbiased estimate"],
  ["Linear combinations of random variables",4,"linear combination","combining random variables"],["Regular Markov chain",.4,"regular chain"]], [], HL),
P("mi040","4.7","Name a situation modelled by a Poisson distribution.","Prussian cavalry horse-kick deaths",[
  ["Cars passing a point per minute",15,"cars passing","cars per minute","traffic"],["Calls to a call centre per hour",15,"phone calls","calls per hour","calls"],["Emails received per hour",10,"emails"],
  ["Typos per page",10,"typing errors","misprints","errors per page"],["Customers arriving at a shop",10,"customers","arrivals"],["Earthquakes per year",6,"earthquakes"],
  ["Radioactive decays per second",6,"radioactive decay","decays"],["Goals in a football match",6,"goals"],["Accidents at a junction",6,"accidents"],["Prussian cavalry horse-kick deaths",.4,"horse kicks","prussian cavalry","bortkiewicz"]], [], HL),
/* ---------- 5 Calculus ---------- */
P("mi041","5.1","Name a concept or use of differentiation.","Marginal cost",[
  ["Gradient of a curve",20,"gradient","slope","gradient function"],["Rate of change",18,"rates of change"],["Tangent",12,"tangent line"],["Stationary point",10,"stationary points","turning point"],
  ["Maximum and minimum",10,"maximum","minimum","max","min"],["Optimization",10,"optimisation","optimizing"],["Normal",8,"normal line"],["Increasing and decreasing functions",6,"increasing","decreasing"],
  ["Second derivative",6,"concavity"],["Limits",4,"limit"],["Velocity",4,"speed"],["Marginal cost",.4,"marginal revenue","marginal profit"]]),
P("mi042","5.1","Name a real optimization problem that can be solved with calculus.","Snell's law",[
  ["Maximizing profit",20,"maximise profit","maximum profit","profit"],["Minimizing cost",15,"minimise cost","minimum cost","cost"],["Maximizing area with fixed fencing",15,"maximum area","fencing","area of a field"],
  ["Minimizing material for a can",12,"can design","surface area of a can","minimum surface area","tin can"],["Maximizing the volume of an open box",12,"open box","maximum volume","box volume"],
  ["Minimizing travel time",6,"shortest time","fastest route"],["Maximum height of a projectile",6,"maximum height","highest point"],["Snell's law",.4,"snells law","refraction","least time"]]),
P("mi043","5.2","Name a concept or use of integration.","Riemann sum",[
  ["Area under a curve",25,"area","area under a graph"],["Trapezoidal rule",12,"trapezium rule","trapezoid rule"],["Antiderivative",12,"anti derivative","reverse of differentiation"],["Definite integral",12,"definite"],
  ["Indefinite integral",10,"indefinite"],["Constant of integration",8,"plus c","+ c"],["Displacement from velocity",8,"displacement","distance travelled"],["Volume of revolution",5,"volume"],
  ["Area between curves",5,"area between two curves"],["Riemann sum",.4,"riemann sums"]]),
P("mi044","5.2","Name a way of estimating the area under a curve without integrating exactly.","Monte Carlo method",[
  ["Trapezoidal rule",35,"trapezium rule","trapezoid rule","trapezoids","trapeziums"],["Counting squares",15,"grid squares","squares"],["Rectangles",15,"riemann sums","rectangle method","upper and lower sums"],
  ["Using a GDC",10,"gdc","calculator","technology"],["Simpson's rule",6,"simpson","simpsons rule"],["Midpoint rule",4,"midpoint"],["Monte Carlo method",.4,"monte carlo","random points"]]),
P("mi045","5.3","Name a method or concept for solving differential equations in IB Maths AI.","Second-order differential equations",[
  ["Separation of variables",20,"separating variables","separable"],["Euler's method",18,"euler","eulers method"],["Slope field",15,"slope fields","direction field"],["Phase portrait",10,"phase portraits","phase plane"],
  ["Initial conditions",8,"initial condition","boundary condition"],["Equilibrium points",6,"equilibrium","equilibria"],["Coupled differential equations",6,"coupled systems","coupled"],["Eigenvalues",6,"eigenvalue method"],
  ["Second-order differential equations",.4,"second order","second order differential equation"]], [], HL),
P("mi046","5.3","Name a real situation modelled by a differential equation.","Lanchester's laws",[
  ["Population growth",20,"population"],["Newton's law of cooling",15,"cooling","newtons law of cooling","cooling coffee"],["Radioactive decay",12,"decay","half life"],["Predator–prey model",12,"predator prey","lotka volterra"],
  ["Spread of a disease",10,"sir model","epidemic","disease"],["Velocity and acceleration",8,"kinematics","motion"],["Mixing in a tank",6,"mixing tank","salt in a tank"],["Continuous compound interest",6,"continuous interest","compound interest"],
  ["Lanchester's laws",.4,"lanchester","battle model","combat model"]], [], HL),
];

/* ================= the survey flight (sideways) ================= */
const BANDS = [
  {name:"The drone workshop", zone:"The drone workshop",   from:0,  to:40,  hue:200, bg:["#1a2230","#1f2a3a"]},
  {name:"Bar-chart suburbs",  zone:"Bar-chart suburbs",    from:40, to:100, hue:30,  bg:["#1f2a3a","#26324a"]},
  {name:"Scatter-plot park",  zone:"Scatter-plot park",    from:100,to:170, hue:120, bg:["#26324a","#1f3a34"]},
  {name:"Histogram heights",  zone:"Histogram heights",    from:170,to:250, hue:210, bg:["#1f3a34","#1a2a44"]},
  {name:"Bell-curve stadium", zone:"The bell-curve stadium", from:250,to:320, hue:45, bg:["#1a2a44","#2a2440"]},
  {name:"Sine-wave harbour",  zone:"The sine-wave harbour", from:320,to:390, hue:190, bg:["#2a2440","#14304a"]},
  {name:"The market",         zone:"The compound-interest market", from:390,to:460, hue:145, bg:["#14304a","#12302a"]},
  {name:"The metro network",  zone:"The graph-theory metro", from:460,to:530, hue:280, bg:["#12302a","#221a3a"]},
  {name:"Voronoi fields",     zone:"The Voronoi fields",   from:530,to:600, hue:90,  bg:["#221a3a","#1a2a1a"]},
  {name:"The cloud",          zone:"The cloud",            from:600,to:760, hue:185, bg:["#1a2a1a","#0a1420"]},
];
const FACTS = [
  [-30,"propellers on · camera on · collecting data"],[12,"a sample is part of a population"],[30,"discrete data are counted; continuous data are measured"],
  [60,"a histogram's bars touch; a bar chart's don't"],[90,"the median is the middle value"],[125,"r near +1 or −1 means strong linear correlation"],[155,"correlation is not causation"],
  [190,"an outlier lies more than 1.5 × IQR beyond a quartile"],[230,"standard deviation measures spread around the mean"],[270,"about 68% of data lie within one standard deviation of the mean"],
  [305,"about 95% lie within two standard deviations"],[340,"tides follow a sine curve, about every 12.4 hours"],[372,"period = 360° ÷ b for y = a sin(bx) + d"],
  [410,"compound interest: FV = PV(1 + r/100k)^(kn)"],[445,"money doubles in about 72 ÷ r years"],[480,"a graph is made of vertices and edges"],
  [515,"Königsberg's seven bridges started graph theory (Euler, 1736)"],[550,"each Voronoi cell holds every point closest to its site"],[585,"John Snow's 1854 cholera map was a Voronoi diagram"],
  [620,"about 400 million terabytes of data are made every day"],[665,"all models are wrong, but some are useful · George Box"],[720,"the whole population, surveyed"],
];
const GROUND = 344;
function scene(i, len){
  const r = srand(911 + i*43); let s = "";
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  const ground = ["#2a3a4a","#3a4a3a","#2f5a34","#2a3a4a","#3a3a4a","#1d4a6a","#2a3a34","#2a2a3a","#4a6a2a","#1a2a3a"][i];
  if (i !== 5 && i !== 9) s += `<rect x="0" y="${GROUND}" width="${len}" height="${420-GROUND}" fill="${ground}"/><path d="M0 ${GROUND} H${len}" stroke="rgb(255 255 255 / .2)" stroke-width="2"/>`;
  switch(i){
    case 0: // the workshop: workbench, charging pads, a whiteboard of formulas
      s += `<rect x="40" y="${GROUND-150}" width="${len-120}" height="150" fill="#24303e"/><rect x="40" y="${GROUND-156}" width="${len-120}" height="8" fill="#3a4a5a"/>`;
      each(170, x=>{ s+=`<rect x="${x}" y="${GROUND-60}" width="120" height="10" fill="#6a5a44"/><rect x="${x+10}" y="${GROUND-50}" width="8" height="50" fill="#4a3a2a"/><rect x="${x+102}" y="${GROUND-50}" width="8" height="50" fill="#4a3a2a"/>`
        + `<ellipse cx="${x+60}" cy="${GROUND-66}" rx="30" ry="6" fill="#3ee089" opacity=".5" class="blink"/>`; }, 60);
      s += `<rect x="70" y="${GROUND-136}" width="200" height="70" fill="#eef2f6"/><text x="80" y="${GROUND-114}" font-size="14" fill="#2a4a8a" font-family="Caveat,cursive">x̄ = Σx ÷ n</text><text x="80" y="${GROUND-92}" font-size="14" fill="#2a4a8a" font-family="Caveat,cursive">σ² = Σ(x − μ)² ÷ n</text><text x="80" y="${GROUND-72}" font-size="13" fill="#c0392b" font-family="Caveat,cursive">H₀ vs H₁</text>`;
      break;
    case 1: // houses whose roofs are bars of a bar chart
      each(110, x=>{ const h = f1(40 + r()*90), c = ["#e8443a","#3a8ae8","#3ac08a","#e8b030"][Math.floor(r()*4)];
        s+=`<rect x="${x}" y="${f1(GROUND-h)}" width="70" height="${h}" fill="${c}" opacity=".85"/><rect x="${x+24}" y="${GROUND-30}" width="20" height="30" fill="#2a1a10"/><rect x="${x+8}" y="${f1(GROUND-h+12)}" width="16" height="14" fill="#ffe8a0"/><rect x="${x+46}" y="${f1(GROUND-h+12)}" width="16" height="14" fill="#ffe8a0"/>`
          + `<text x="${x+35}" y="${f1(GROUND-h-6)}" text-anchor="middle" font-size="12" fill="#cfe0f0" font-family="IBM Plex Mono,monospace">${Math.round(h/10)}</text>`; }, 30);
      break;
    case 2: { // the park: trees placed as a scatter plot, with the regression line as a path
      const pts = []; each(46, x=>{ const y = f1(GROUND - 30 - (x/len)*170 + (r()-.5)*70); pts.push([x,y]);
        s+=`<path d="M${x} ${GROUND} V${y}" stroke="#6a4a2a" stroke-width="5"/><circle cx="${x}" cy="${y}" r="${f1(12+r()*8)}" fill="hsl(${f1(100+r()*40)} 50% 40%)"/>`; }, 30);
      s += `<path d="M0 ${GROUND-30} L${len} ${GROUND-200}" stroke="#ffd25a" stroke-width="4" stroke-dasharray="14 10"/><text x="${len-260}" y="${GROUND-220}" font-size="15" fill="#ffd25a" font-family="IBM Plex Mono,monospace">y = 0.42x + 30 · r = 0.81</text>`;
    } break;
    case 3: // skyscrapers whose heights make a histogram
      { let x = 30; const freq = [2,4,7,10,13,15,13,10,7,4,2]; while (x < len - 60){ const k = Math.floor((x/len)*freq.length), h = freq[Math.min(k, freq.length-1)]*16 + r()*20;
        s+=`<rect x="${x}" y="${f1(GROUND-h)}" width="56" height="${f1(h)}" fill="#2a4a6a" stroke="#9fd8ff" stroke-opacity=".5"/>`;
        for (let wy = GROUND-h+10; wy < GROUND-12; wy += 16) for (let wx = x+8; wx < x+50; wx += 14) s+=`<rect x="${wx}" y="${f1(wy)}" width="7" height="8" fill="${r()<.5?"#ffe58a":"#1a2a3a"}"/>`;
        x += 56; } }
      break;
    case 4: { // the stadium: seats in the shape of a bell curve, with a scoreboard
      let d = `M0 ${GROUND}`; for (let x=0; x<=len; x+=10){ const z = (x/len - .5)*6; d += ` L${x} ${f1(GROUND - 230*Math.exp(-z*z/2))}`; } d += ` L${len} ${GROUND}Z`;
      s += `<path d="${d}" fill="#3a3a5a" stroke="#ffd25a" stroke-width="3"/>`;
      each(14, x=>{ const z = (x/len - .5)*6, top = GROUND - 230*Math.exp(-z*z/2); for (let y = GROUND-10; y > top+6; y -= 14) s+=`<circle cx="${x}" cy="${y}" r="3" fill="hsl(${Math.floor(r()*360)} 70% 65%)"/>`; }, 10);
      s += `<rect x="${len/2-90}" y="40" width="180" height="56" rx="6" fill="#0a0a14" stroke="#ffd25a" stroke-width="2"/><text x="${len/2}" y="64" text-anchor="middle" font-size="16" fill="#ffd25a" font-family="Chakra Petch,sans-serif">μ = 170 · σ = 8</text><text x="${len/2}" y="86" text-anchor="middle" font-size="12" fill="#9fd8ff" font-family="IBM Plex Mono,monospace">68 · 95 · 99.7</text>`;
    } break;
    case 5: { // the harbour: a sine-wave sea, a lighthouse and a tide gauge
      let d = `M0 ${GROUND}`; for (let x=0; x<=len; x+=8) d += ` L${x} ${f1(GROUND - 26*Math.sin(x/70))}`; d += ` L${len} 420 L0 420Z`;
      s += `<path d="${d}" fill="#1d5e8a"/>`;
      each(260, x=>{ s+=`<g class="fl" style="animation-delay:-${f1(r()*3)}s"><path d="M${x} ${f1(GROUND-26*Math.sin(x/70)-6)} h60 l-10 16 h-40z" fill="#e8e2d0"/><path d="M${x+30} ${f1(GROUND-26*Math.sin(x/70)-8)} v-40 l20 30z" fill="#fff"/></g>`; }, 80);
      s += `<rect x="${len-130}" y="${GROUND-180}" width="30" height="180" fill="#e8e2d0"/><rect x="${len-130}" y="${GROUND-140}" width="30" height="18" fill="#c0392b"/><circle cx="${len-115}" cy="${GROUND-192}" r="10" fill="#ffe58a" class="blink"/>`
        + `<rect x="40" y="${GROUND-120}" width="12" height="160" fill="#c9a26a"/>` + [0,1,2,3,4].map(k=>`<path d="M40 ${GROUND-110+k*30} h14" stroke="#1a1a1a" stroke-width="2"/><text x="58" y="${GROUND-106+k*30}" font-size="11" fill="#ffd25a" font-family="IBM Plex Mono,monospace">${4-k} m</text>`).join("");
    } break;
    case 6: // the market: a compound-interest curve and price boards
      { let d = `M0 ${GROUND-20}`; for (let x=0; x<=len; x+=12) d += ` L${x} ${f1(GROUND - 20 - 250*(Math.pow(1.6, x/len*5) - 1)/(Math.pow(1.6, 5) - 1))}`; s += `<path d="${d}" stroke="#3ee089" stroke-width="4" fill="none"/>`; }
      each(220, x=>{ s+=`<rect x="${x}" y="${GROUND-110}" width="90" height="110" fill="#2a2030"/><rect x="${x+8}" y="${GROUND-100}" width="74" height="40" fill="#000" opacity=".7"/><text x="${x+45}" y="${GROUND-74}" text-anchor="middle" font-size="13" fill="#3ee089" font-family="IBM Plex Mono,monospace">+${(r()*6+1).toFixed(1)}%</text><rect x="${x+30}" y="${GROUND-40}" width="30" height="40" fill="#1a1420"/>`; }, 40);
      break;
    case 7: // the metro: stations as vertices and lines as edges
      { const V = []; each(150, x=>{ V.push([x, f1(80 + r()*220)]); }, 40);
        V.forEach((a, k) => { const b = V[k+1], c = V[k+2]; if (b) s += `<path d="M${a[0]} ${a[1]} L${b[0]} ${b[1]}" stroke="hsl(${(k*67)%360} 80% 60%)" stroke-width="6"/>`; if (c && k % 2 === 0) s += `<path d="M${a[0]} ${a[1]} L${c[0]} ${c[1]}" stroke="#ffd25a" stroke-width="3" stroke-dasharray="6 6"/><text x="${f1((a[0]+c[0])/2)}" y="${f1((a[1]+c[1])/2 - 6)}" font-size="12" fill="#ffd25a" font-family="IBM Plex Mono,monospace">${Math.round(3 + r()*12)}</text>`; });
        V.forEach(([x, y]) => { s += `<circle cx="${x}" cy="${y}" r="10" fill="#fff" stroke="#1a1a2a" stroke-width="3"/>`; }); }
      break;
    case 8: { // Voronoi fields: farmland divided into nearest-site cells, with a farmhouse at each site
      const sites = []; each(120, x=>{ sites.push([x + (r()-.5)*60, f1(120 + r()*200)]); }, 50);
      for (let x = 10; x < len; x += 14) for (let y = 110; y < GROUND; y += 14){ let best = 0, bd = 1e9; sites.forEach(([sx, sy], k) => { const d = (sx-x)*(sx-x) + (sy-y)*(sy-y); if (d < bd){ bd = d; best = k; } });
        s += `<rect x="${x-7}" y="${y-7}" width="14" height="14" fill="hsl(${70 + (best*37)%70} 45% ${30 + (best*13)%18}%)"/>`; }
      sites.forEach(([x, y]) => { s += `<path d="M${f1(x-10)} ${y} l10 -10 l10 10 v10 h-20z" fill="#e8d8b0" stroke="#5a3a1a"/>`; });
    } break;
    case 9: // the cloud: data streaming up into a server cloud
      each(40, x=>{ s+=`<text x="${x}" y="${f1(60+r()*300)}" font-size="${f1(10+r()*8)}" fill="#9ff5e8" opacity="${f1(.15+r()*.4)}" font-family="IBM Plex Mono,monospace" class="${r()<.3?"blink":""}">${r()<.5?"0":"1"}</text>`; }, 10);
      each(300, x=>{ s+=`<g class="drift" style="animation-delay:-${f1(r()*4)}s"><ellipse cx="${x}" cy="140" rx="90" ry="40" fill="#cfe8ff" opacity=".16"/><ellipse cx="${x+50}" cy="120" rx="60" ry="34" fill="#cfe8ff" opacity=".14"/>`
        + [0,1,2].map(k=>`<rect x="${x-40+k*30}" y="150" width="24" height="44" rx="3" fill="#1a2a3a" stroke="#9ff5e8" stroke-opacity=".6"/><circle cx="${x-28+k*30}" cy="160" r="2.4" fill="#3ee089" class="blink"/>`).join("") + `</g>`; }, 90);
      break;
  }
  return hscene(s, len);
}
/* the survey drone: rotors spin; it gains a camera, lights and a data pod, and turns gold */
function avatar(level, hue){
  const gold = level >= 8, body = gold ? "#e0ad2a" : "#3a4658", trim = gold ? "#fff2a8" : `hsl(${hue} 80% 62%)`;
  const rotor = (x, y) => `<g transform="translate(${x} ${y})"><path d="M0 0 V5" stroke="#1a1a1a" stroke-width="2"/><ellipse class="av-rotor" rx="13" ry="2.6" fill="${trim}" opacity=".75"/></g>`;
  const s = `<g class="av-hover">
    <path d="M-24 -6 L24 -6 M-18 -6 L-12 2 M18 -6 L12 2" stroke="${body}" stroke-width="3" stroke-linecap="round"/>
    ${rotor(-24, -11)}${rotor(24, -11)}
    <rect x="-14" y="-2" width="28" height="14" rx="6" fill="${body}" stroke="${trim}" stroke-width="2"/>
    <circle cx="0" cy="5" r="4.4" fill="#0a1420" stroke="${trim}" stroke-width="1.4"/><circle cx="1.4" cy="3.6" r="1.4" fill="#fff"/>
    ${level >= 3 ? `<path d="M-4 12 v4 h8 v-4" fill="${body}"/><circle cy="18" r="3.4" fill="#0a1420" stroke="${trim}" stroke-width="1.2"/><path class="blink" d="M-10 26 L0 20 L10 26" stroke="${trim}" stroke-width="1" fill="none" opacity=".6"/>` : ""}
    ${level >= 5 ? `<circle class="blink" cx="-12" cy="4" r="1.8" fill="#ff5470"/><circle class="blink" style="animation-delay:-.5s" cx="12" cy="4" r="1.8" fill="#3ee089"/>` : ""}
    ${level >= 6 ? `<rect x="-7" y="24" width="14" height="9" rx="2" fill="#9ff5e8" opacity=".85"/><text y="31" text-anchor="middle" font-size="6" font-weight="700" fill="#0a1420" font-family="IBM Plex Mono,monospace">DATA</text>` : ""}
    ${gold ? `<text y="-18" text-anchor="middle" font-size="11" font-weight="700" fill="#fff2a8" font-family="Chakra Petch,sans-serif" class="blink">σ</text>` : ""}
  </g>`;
  return avatarSVG(s);
}
function entity(t, c){
  const W = (w,h,inner) => `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">${inner}</svg>`;
  if (t === "gem"){ let d = "M20 92"; for (let x = 20; x <= 180; x += 5){ const z = (x - 100)/28; d += ` L${x} ${f1(92 - 70*Math.exp(-z*z/2))}`; }
    return W(200,110,`<path d="${d}" fill="${c}" fill-opacity=".25" stroke="${c}" stroke-width="3"/><circle cx="176" cy="20" r="8" fill="#fff2a8" class="blink"/><path d="M100 22 V92" stroke="${c}" stroke-dasharray="4 4"/>`); }
  if (t === "rootkit") return W(170,100,[[40,70],[52,64],[48,76],[60,70],[56,60],[66,74]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="${c}" opacity=".6"/>`).join("") + `<circle cx="140" cy="20" r="9" fill="${c}"/><circle cx="140" cy="20" r="16" fill="none" stroke="${c}" stroke-width="2" class="blink"/>`);
  if (t === "trojan") return W(170,100,[[30,80],[50,70],[66,66],[84,52],[102,48],[120,34],[140,26]].map(([x,y])=>`<circle cx="${x}" cy="${y}" r="5" fill="${c}"/>`).join("") + `<path d="M20 86 L150 20" stroke="${c}" stroke-width="3" stroke-dasharray="8 5"/>`);
  if (t === "adware") return W(170,100,[30,52,40,64,46].map((h,k)=>`<rect x="${32+k*24}" y="${92-h}" width="18" height="${h}" fill="${c}"/>`).join("") + `<path d="M24 92 H160" stroke="${c}" stroke-width="2"/>`);
  if (t === "spam") return W(170,90,`<path d="M30 70 H140" stroke="${c}" stroke-width="3"/><rect x="74" y="34" width="22" height="36" fill="${c}"/><text x="85" y="26" text-anchor="middle" font-size="16" fill="${c}" font-family="Chakra Petch,sans-serif">x̄</text>`);
  if (t === "blocked") return W(170,100,`<rect x="40" y="26" width="90" height="48" rx="6" fill="#1a1a2a" stroke="#e8443a" stroke-width="3"/><text x="85" y="58" text-anchor="middle" font-size="24" font-weight="700" fill="#e8443a" font-family="Chakra Petch,sans-serif">H₀</text>`);
  return null;
}
const UNITS = ["B","kB","MB","GB","TB","PB","EB","ZB","YB"];
const bytes = p => Math.pow(10, p*24/700);
function fmtB(v){ let u = 0; while (v >= 1000 && u < UNITS.length - 1){ v /= 1000; u++; } return (v < 10 ? v.toFixed(1) : Math.round(v)) + " " + UNITS[u]; }
registerSubject({
  key:"mathai", name:"Mathematics AI", theme:"A survey drone collecting data across a city of graphs", gemWord:"Census", gemTitle:"One in a Census", emoji:"🛸",
  blurb:"You're a survey drone leaving the workshop. Each prompt has many correct answers, typed in. <b>Obvious answers barely leave the bench. Answers other players missed fly you further and collect more data</b>, over bar-chart suburbs, a scatter-plot park, a bell-curve stadium, a sine-wave harbour, the metro network and the Voronoi fields, up into the cloud.",
  axis:"right", arrow:"▶",
  tiers:{gem:"One in a Census", rootkit:"Outlier", trojan:"Significant", adware:"Correlated", spam:"Average"}, blocked:"Rejected", fw:"NULL HYPOTHESIS",
  notes:{rootkit:"A real outlier: very few players gave this answer.", trojan:"Statistically significant. Most people don't reach it.", adware:"Correct, and fairly common.", spam:"The mean answer: the one everyone gives."},
  ladder:{gem:"A one-off in the whole population", rootkit:"An outlier: very rare", trojan:"Significant: most people miss it", adware:"Correlated with what others say", spam:"The average answer", blocked:"Not an accepted answer"},
  verbs:{cta:"Fly ▶", inject:"Survey", hint:"▶ rarer answers fly further and collect more data ▶", count:"crunching the numbers"},
  shout:t => ({gem:"p < 0.001!", rootkit:"OUTLIER!", blocked:"REJECTED!"})[t],
  particles:["σ","μ","Σ","%"], particleColor:"#9ff5e8",
  meter:{label:"DATA", fmt:p=>fmtB(bytes(p)), zone:p=>fmtB(bytes(p)), tick:p=>fmtB(bytes(p)), gain:(a,b)=>`collect ${fmtB(bytes(b))}`},
  start:{bg:"linear-gradient(90deg,#0e141c,#1a2230)", label:"Start · 1 B", zone:"Ready for take-off", color:"#9ff5e8",
    deco:len=>hscene(`<rect x="0" y="${GROUND}" width="${len}" height="${420-GROUND}" fill="#2a3a4a"/><rect x="${len-260}" y="${GROUND-120}" width="200" height="120" fill="#24303e"/><path d="M${len-270} ${GROUND-120} h220 l-20 -30 h-180z" fill="#3a4a5a"/><text x="${len-160}" y="${GROUND-60}" text-anchor="middle" font-family="Chakra Petch,sans-serif" font-size="18" fill="#9ff5e8">HANGAR</text>`, len)},
  endBg:"linear-gradient(90deg,#0a1420,#020408)",
  bands:BANDS, facts:FACTS, deco:scene, avatar, entity,
  beyond:"Beyond the cloud",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
