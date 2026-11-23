/* Physics — a cannon fires your answer across the landscape. Rarer answers fly further.
   Syllabus: IB Physics (first assessment 2025), themes A–E. */
(function(){
const CATALOG = [
  {label:"Physics", units:[
    {code:"A", name:"Space, time and motion", topics:[["A.1","Kinematics"],["A.2","Forces and momentum"],["A.3","Work, energy and power"],["A.4","Rigid body mechanics",HL],["A.5","Galilean and special relativity",HL]]},
    {code:"B", name:"The particulate nature of matter", topics:[["B.1","Thermal energy transfers"],["B.2","Greenhouse effect"],["B.3","Gas laws"],["B.4","Thermodynamics",HL],["B.5","Current and circuits"]]},
    {code:"C", name:"Wave behaviour", topics:[["C.1","Simple harmonic motion"],["C.2","Wave model"],["C.3","Wave phenomena"],["C.4","Standing waves and resonance"],["C.5","Doppler effect"]]},
    {code:"D", name:"Fields", topics:[["D.1","Gravitational fields"],["D.2","Electric and magnetic fields"],["D.3","Motion in electromagnetic fields"],["D.4","Induction",HL]]},
    {code:"E", name:"Nuclear and quantum physics", topics:[["E.1","Structure of the atom"],["E.2","Quantum physics",HL],["E.3","Radioactive decay"],["E.4","Fission"],["E.5","Fusion and stars"]]},
  ]},
];

const PROMPTS = [
P("ph01","A.1","Name a vector quantity.","Angular momentum",[
  ["Velocity",25],["Force",20],["Acceleration",18],["Displacement",15],["Momentum",10],["Weight",6],["Electric field strength",2,"electric field"],["Impulse",2],["Torque",1,"moment"],
  ["Angular momentum",.4]],
  [[["speed","distance","mass","time","energy","temperature","power","work"],"That's a scalar: it has size but no direction."]]),
P("ph02","A.1","Name a quantity in the SUVAT equations, or another kinematics quantity.","Jerk",[
  ["Acceleration (a)",18,"a","acceleration"],["Displacement (s)",18,"s","displacement"],["Initial velocity (u)",15,"u","initial velocity","starting velocity"],
  ["Final velocity (v)",15,"v","final velocity"],["Time (t)",15,"t","time"],["Speed",6],["Distance",6],["Jerk",.4,"rate of change of acceleration"]]),
P("ph03","A.1","Name something that affects how far a projectile travels.","Air density",[
  ["Launch speed",30,"speed","velocity","initial velocity","initial speed","power","force"],["Launch angle",25,"angle","45 degrees","angle of launch"],
  ["Air resistance",15,"drag","air friction"],["Gravity",10,"g","gravitational field strength","gravitational pull"],["Launch height",8,"height","height of launch"],
  ["Wind",4],["Mass (with air resistance)",3,"mass","weight"],["Spin",2,"magnus effect"],["Air density",.4,"altitude","air pressure"]]),
P("ph04","A.2","Name a type of force.","Weak nuclear force",[
  ["Gravity / weight",25,"gravity","weight","gravitational"],["Friction",20],["Air resistance / drag",12,"air resistance","drag"],["Normal reaction force",8,"normal","normal force","reaction force"],
  ["Tension",8],["Upthrust / buoyancy",6,"upthrust","buoyancy"],["Magnetic force",5,"magnetic","magnetism"],["Electrostatic force",4,"electrostatic","electric force"],["Thrust",4],
  ["Elastic / spring force",4,"elastic","spring force"],["Lift",3],["Strong nuclear force",2,"strong force","strong nuclear"],["Weak nuclear force",.4,"weak force","weak nuclear"]]),
P("ph05","A.2","Name one of Newton's laws, or an idea from them.","Inertial reference frame",[
  ["F = ma (second law)",25,"f ma","fma","second law","newtons second law"],["Equal and opposite reaction (third law)",25,"third law","action reaction","every action has an equal and opposite reaction","newtons third law"],
  ["Inertia (first law)",20,"inertia","first law","newtons first law","an object stays at rest"],["Conservation of momentum",8,"momentum","momentum conservation"],
  ["Resultant force",6,"net force","unbalanced force"],["Impulse",4],["Inertial reference frame",.4,"inertial frame"]]),
P("ph06","A.3","Name a store or form of energy.","Rest mass energy",[
  ["Kinetic",25,"kinetic energy","ke","movement"],["Gravitational potential",18,"potential","gpe","gravitational potential energy","potential energy"],["Thermal / heat",12,"thermal","heat"],
  ["Chemical",10],["Elastic potential",8,"elastic","strain energy"],["Electrical",8,"electric"],["Nuclear",6],["Light / radiant",6,"light","radiant"],["Sound",5],
  ["Rest mass energy",.4,"rest energy","mass energy","e mc2","emc2"]]),
P("ph07","A.3","Name a unit used in mechanics.","Erg",[
  ["Newton (N)",20,"newton","newtons","n"],["Joule (J)",20,"joule","joules","j"],["Watt (W)",15,"watt","watts","w"],["Metres per second",10,"m s","ms 1","metres per second","meters per second"],
  ["Kilogram",8,"kg"],["Metres per second squared",6,"m s 2","ms 2"],["Pascal",4,"pa"],["Newton second",3,"ns","kg m s","kgms 1"],["Kilowatt-hour",3,"kwh"],["Electronvolt",2,"ev"],["Erg",.4]]),
P("ph08","A.4","Name a quantity or idea in rigid body mechanics.","Precession",[
  ["Torque",25,"moment","moment of a force"],["Moment of inertia",18,"rotational inertia"],["Angular velocity",15,"angular speed"],["Angular momentum",12],
  ["Angular acceleration",8],["Centre of mass",6,"center of mass"],["Rotational kinetic energy",5],["Couple",3],["Precession",.4]], [], HL),
P("ph09","B.1","Name a way thermal energy is transferred, or a related term.","Stefan–Boltzmann law",[
  ["Conduction",25],["Convection",22],["Radiation",22,"thermal radiation","infrared radiation"],["Specific heat capacity",10,"shc"],["Latent heat",6],["Insulation",4,"insulator"],
  ["Black body",3,"blackbody"],["Emissivity",2],["Stefan–Boltzmann law",.4,"stefan boltzmann"]]),
P("ph10","B.2","Name a greenhouse gas, or a term about the greenhouse effect.","Sulfur hexafluoride",[
  ["Carbon dioxide",30,"co2"],["Methane",20,"ch4"],["Water vapour",12,"water vapor","h2o"],["Nitrous oxide",8,"n2o"],["Albedo",6],["Infrared radiation",4,"infrared","ir"],
  ["Ozone",4],["CFCs",4,"chlorofluorocarbons"],["Enhanced greenhouse effect",3],["Sulfur hexafluoride",.4,"sf6"]]),
P("ph11","B.3","Name a gas law, or a variable that describes a gas.","Avogadro's law",[
  ["Pressure",22],["Volume",18],["Temperature (kelvin)",18,"temperature","kelvin"],["Boyle's law",10,"boyle","boyles law"],["Charles's law",8,"charles","charles law"],
  ["Ideal gas law (pV = nRT)",8,"pv nrt","pvnrt","ideal gas law","ideal gas equation"],["Pressure law",5,"gay lussac"],["Amount (moles)",5,"moles","amount","n"],["Avogadro's law",.4,"avogadros law"]]),
P("ph12","B.5","Name a component in an electric circuit.","Potentiometer",[
  ["Resistor",20,"resistors"],["Cell / battery",20,"battery","cell","power supply"],["Bulb / lamp",12,"bulb","lamp","light bulb"],["Switch",12],["Ammeter",6],["Voltmeter",6],
  ["Wire",6,"wires"],["Diode / LED",6,"diode","led"],["Capacitor",4],["Fuse",3],["Variable resistor",3,"rheostat"],["Thermistor",2],["LDR",2,"light dependent resistor"],
  ["Potentiometer",.4,"potential divider"]]),
P("ph13","B.5","Name an electrical quantity or law.","Conductance",[
  ["Current",22,"i","amps","amperes"],["Potential difference / voltage",20,"voltage","potential difference","pd"],["Resistance",18,"ohms"],["Ohm's law (V = IR)",12,"ohms law","v ir","vir"],
  ["Power",8,"p iv"],["Charge",6,"coulombs"],["EMF",5,"electromotive force"],["Internal resistance",3],["Resistivity",3],["Kirchhoff's laws",2,"kirchhoff","kirchhoffs laws"],
  ["Conductance",.4,"siemens"]]),
P("ph14","C.2","Name a type of wave, or a part of the electromagnetic spectrum.","Gravitational waves",[
  ["Visible light",18,"light","visible"],["Radio waves",12,"radio"],["Sound",12,"sound waves"],["Microwaves",10],["X-rays",10,"xrays","x ray"],["Ultraviolet",8,"uv"],["Infrared",8,"ir"],
  ["Gamma rays",8,"gamma"],["Transverse waves",4,"transverse"],["Longitudinal waves",4,"longitudinal"],["Water waves",3,"ocean waves"],["Seismic waves",3,"earthquake waves","p waves","s waves"],
  ["Gravitational waves",.4]]),
P("ph15","C.3","Name a wave property or a wave behaviour.","Total internal reflection",[
  ["Wavelength",20],["Frequency",18],["Amplitude",15],["Reflection",10],["Refraction",10],["Diffraction",8],["Interference",6,"superposition"],["Period",4,"time period"],
  ["Wave speed",4,"speed"],["Polarisation",3,"polarization"],["Total internal reflection",.4,"tir"]]),
P("ph16","C.4","Name an example of resonance, standing waves or the Doppler effect.","MRI scanner",[
  ["Siren changing pitch",25,"siren","ambulance","police car","doppler"],["Guitar string",15,"string instrument","violin","guitar"],["Wine glass shattering",10,"glass","singer breaks glass"],
  ["Red shift of galaxies",8,"red shift","redshift"],["Tacoma Narrows bridge",6,"bridge collapse","bridge","millennium bridge"],["Pushing a swing",5,"swing"],
  ["Organ pipe / flute",5,"organ","flute","wind instrument","pipes"],["Radar speed gun",5,"radar","speed camera","speed gun"],["Doppler ultrasound",3,"ultrasound"],["Microwave oven",3],
  ["MRI scanner",.4,"mri","nuclear magnetic resonance"]]),
P("ph17","D.1","Name a quantity, law or idea about gravitational fields.","Lagrange points",[
  ["g = 9.81 N kg⁻¹",20,"g","9 81","9 8","gravitational field strength"],["Newton's law of gravitation",18,"law of gravitation","universal gravitation","inverse square law"],
  ["Weight",10],["Mass",8],["Orbits",8,"orbit","orbital speed","satellite"],["Escape velocity",6,"escape speed"],["Gravitational potential",5],["Kepler's laws",4,"kepler","keplers third law"],
  ["Gravitational constant G",4,"big g","6 67"],["Lagrange points",.4,"lagrange point","lagrangian point"]]),
P("ph18","D.2","Name something to do with electric or magnetic fields.","Hall effect",[
  ["Magnets / poles",12,"magnet","north pole","south pole","poles"],["Field lines",12,"magnetic field lines"],["Electromagnet",10,"electromagnets"],["Charge",10,"electric charge"],
  ["Coulomb's law",8,"coulomb","coulombs law"],["Motor effect",8,"flemings left hand rule","left hand rule"],["Solenoid",5,"coil"],["Electric field strength",5,"electric field"],
  ["Magnetic flux density (tesla)",4,"tesla","flux density"],["Hall effect",.4,"hall probe"]]),
P("ph19","D.4","Name a device or law that relies on electromagnetic induction.","Metal detector",[
  ["Generator / dynamo",25,"generator","dynamo"],["Transformer",22,"transformers"],["Faraday's law",12,"faraday","faradays law"],["Lenz's law",10,"lenz","lenzs law"],
  ["Induction hob",5,"induction cooker","induction cooking"],["Wireless charging",5,"wireless charger"],["Microphone",4],["Alternator",4],["Eddy current braking",2,"eddy currents","eddy current"],
  ["Metal detector",.4]], [], HL),
P("ph20","E.1","Name an atomic model or a famous atomic experiment.","Franck–Hertz experiment",[
  ["Rutherford gold foil experiment",25,"gold foil","rutherford","geiger marsden","alpha scattering"],["Plum pudding model",20,"plum pudding","thomson"],["Bohr model",15,"bohr"],
  ["Nuclear model",10,"nuclear"],["Electron cloud / quantum model",6,"electron cloud","quantum model","schrodinger"],["Dalton's solid sphere",6,"dalton","solid sphere","billiard ball"],
  ["Millikan oil drop",3,"oil drop","millikan"],["Franck–Hertz experiment",.4,"franck hertz"]]),
P("ph21","E.3","Name a type of radiation or a term about radioactive decay.","Electron capture",[
  ["Alpha",20,"alpha particles","alpha radiation"],["Beta",18,"beta particles","beta minus"],["Gamma",18,"gamma rays","gamma radiation"],["Half-life",15,"half life"],["Ionising",6,"ionizing","ionising radiation"],
  ["Isotope",6,"isotopes","radioisotope"],["Activity (becquerel)",4,"activity","becquerel","bq"],["Background radiation",4,"background"],["Positron (beta plus)",3,"positron","beta plus"],
  ["Neutrino",2,"antineutrino"],["Electron capture",.4]]),
P("ph22","E.4","Name a part of a fission reactor, or a fission term.","Enrichment",[
  ["Uranium-235",20,"uranium","u235","u 235"],["Chain reaction",15],["Control rods",15,"control rod"],["Moderator",12,"graphite","water moderator"],["Coolant",8],["Neutrons",8,"neutron"],
  ["Fuel rods",6,"fuel rod"],["Critical mass",4],["Shielding",4,"concrete shield"],["Heat exchanger",2,"turbine"],["Enrichment",.4,"enriched uranium"]]),
P("ph23","E.5","Name a stage in a star's life, or a type of star.","Pulsar",[
  ["Main sequence",20],["Red giant",18],["White dwarf",15],["Supernova",12],["Black hole",10],["Nebula",8,"stellar nebula"],["Neutron star",8],["Red supergiant",4,"supergiant"],
  ["Protostar",4],["Black dwarf",2],["Pulsar",.4]]),
P("ph24","A.5","Name an idea from special relativity.","Spacetime interval",[
  ["Time dilation",25],["Length contraction",20],["The speed of light is constant",18,"speed of light","c is constant","constant speed of light"],["E = mc²",12,"emc2","e mc2","mass energy"],
  ["Lorentz factor",8,"lorentz","gamma","lorentz transformation"],["Relativity of simultaneity",5,"simultaneity"],["Spacetime",5,"spacetime diagram"],["Twin paradox",4,"twins"],
  ["Muon decay",2,"muons","muon"],["Spacetime interval",.4,"invariant interval"]], [], HL),
];

/* ---------------- world (sideways) ---------------- */
const BANDS = [
  {name:"Firing range",   zone:"The firing range",  from:0,  to:40,  hue:200, bg:["#0e2440","#12305a"]},
  {name:"Playing fields", zone:"Playing fields",    from:40, to:100, hue:120, bg:["#12305a","#1a3d6a"]},
  {name:"Village",        zone:"The village",       from:100,to:170, hue:35,  bg:["#1a3d6a","#22508a"]},
  {name:"Forest",         zone:"The forest",        from:170,to:250, hue:140, bg:["#22508a","#2a5c96"]},
  {name:"River",          zone:"River crossing",    from:250,to:320, hue:195, bg:["#2a5c96","#3a6aa0"]},
  {name:"Town",           zone:"The town",          from:320,to:390, hue:25,  bg:["#3a6aa0","#4f6aa0"]},
  {name:"Hills",          zone:"Rolling hills",     from:390,to:460, hue:95,  bg:["#4f6aa0","#6a6a9a"]},
  {name:"City",           zone:"The city",          from:460,to:530, hue:215, bg:["#6a6a9a","#8a5a7a"]},
  {name:"Lake",           zone:"The lake",          from:530,to:600, hue:190, bg:["#8a5a7a","#6a3a5a"]},
  {name:"Mountains",      zone:"Record range",      from:600,to:760, hue:270, bg:["#6a3a5a","#1a1430"]},
];
const FACTS = [
  [-30,"aim · fire · measure"],[10,"g = 9.81 m s⁻² pulls the ball down"],[28,"with no air resistance, 45° gives the longest range"],
  [55,"horizontal velocity stays constant if there's no drag"],[85,"vertical motion: v = u + at"],[115,"kinetic energy = ½mv²"],
  [150,"momentum p = mv is conserved in collisions"],[185,"air resistance grows with speed"],[225,"terminal velocity: drag equals weight"],
  [262,"impulse = force × time = change in momentum"],[300,"power = work done ÷ time"],[335,"waves carry energy, not matter"],
  [370,"v = fλ for every wave"],[405,"gravitational field strength falls with 1/r²"],[440,"an orbit is a fall that keeps missing the ground"],
  [475,"F = ma: double the force, double the acceleration"],[510,"a siren drops in pitch as it passes"],[545,"current is the rate of flow of charge"],
  [580,"V = IR"],[620,"E = mc²: mass is a form of energy"],[655,"half-life is constant for each isotope"],[690,"the Sun fuses hydrogen into helium"],[735,"longest shot on record"],
];
const GY = 330; // ground line inside each 420px scene
function scene(i, len){
  const r = srand(501 + i*23); let s = "";
  const grounds = ["#3d5a2a","#2f7a3a","#4a6a2a","#24502a","#2a5a40","#4a5a3a","#3f7a32","#3a3f48","#3a5a4a","#4a4a5a"];
  s += `<rect x="0" y="${GY}" width="${len}" height="${420-GY}" fill="${grounds[i]}"/><rect x="0" y="${GY}" width="${len}" height="4" fill="rgb(255 255 255 / .15)"/>`;
  const each = (step, fn, start=60) => { for (let x=start; x<len-40; x+=step) fn(x); };
  switch(i){
    case 0: s+=`<path d="M0 ${GY} Q160 ${GY-60} 320 ${GY}" fill="#4a6a34"/>`; each(260, x=>{ s+=`<rect x="${x}" y="${GY-40}" width="6" height="40" fill="#ccc"/><path d="M${x+6} ${GY-40} l26 8 l-26 8z" fill="#ff4f6e"/>`; }, 360); break;
    case 1: each(300, x=>{ s+=`<rect x="${x}" y="${GY-46}" width="70" height="6" fill="#eee"/><rect x="${x}" y="${GY-46}" width="5" height="46" fill="#eee"/><rect x="${x+65}" y="${GY-46}" width="5" height="46" fill="#eee"/><path d="M${x+130} ${GY+10} v70" stroke="rgb(255 255 255 / .5)" stroke-width="3"/><circle cx="${x+130}" cy="${GY+45}" r="26" fill="none" stroke="rgb(255 255 255 / .5)" stroke-width="3"/>`; }); break;
    case 2: each(150, x=>{ const w=60+r()*30, hh=50+r()*30; s+=`<rect x="${f1(x)}" y="${f1(GY-hh)}" width="${f1(w)}" height="${f1(hh)}" fill="#c9a77a"/><path d="M${f1(x-8)} ${f1(GY-hh)} l${f1(w/2+8)} -36 l${f1(w/2+8)} 36z" fill="#8a3a2a"/><rect x="${f1(x+w/2-8)}" y="${GY-26}" width="16" height="26" fill="#5a3a20"/><rect x="${f1(x+10)}" y="${f1(GY-hh+14)}" width="14" height="12" fill="#ffe08a"/>`; }); break;
    case 3: each(46, x=>{ const hh=90+r()*90; s+=`<rect x="${f1(x+12)}" y="${GY-24}" width="8" height="24" fill="#4a2e1a"/><path d="M${f1(x)} ${GY-20} l16 ${f1(-hh)} l16 ${f1(hh)}z" fill="hsl(${130+r()*20} 45% ${22+r()*12}%)"/>`; }, 20); break;
    case 4: s+=`<rect x="60" y="${GY}" width="${len-120}" height="90" fill="#2a6aa8"/>`; each(40, x=>{ s+=`<path d="M${x} ${GY+30+r()*40} q10 -6 20 0" stroke="rgb(255 255 255 / .4)" stroke-width="2" fill="none"/>`; }, 80);
      s+=`<path d="M${len*.35} ${GY} q${len*.15} -90 ${len*.3} 0" stroke="#8a8f99" stroke-width="10" fill="none"/><rect x="${len*.35}" y="${GY-8}" width="${len*.3}" height="8" fill="#8a8f99"/>`; break;
    case 5: each(70, x=>{ const w=46+r()*20, hh=70+r()*110; s+=`<rect x="${f1(x)}" y="${f1(GY-hh)}" width="${f1(w)}" height="${f1(hh)}" fill="hsl(${20+r()*20} 25% ${30+r()*12}%)"/>`; for(let k=12;k<hh-10;k+=22) s+=`<rect x="${f1(x+8)}" y="${f1(GY-hh+k)}" width="10" height="10" fill="#ffe08a" opacity="${r()<.6?.9:.2}"/><rect x="${f1(x+w-18)}" y="${f1(GY-hh+k)}" width="10" height="10" fill="#ffe08a" opacity="${r()<.6?.9:.2}"/>`; }, 30); break;
    case 6: { let d=`M0 ${GY}`; for (let x=0; x<=len; x+=160) d+=` Q${x+80} ${f1(GY-80-r()*80)} ${x+160} ${GY}`; s+=`<path d="${d}Z" fill="#4f8a3a"/>`; } break;
    case 7: each(52, x=>{ const w=40+r()*14, hh=140+r()*170; s+=`<rect x="${f1(x)}" y="${f1(GY-hh)}" width="${f1(w)}" height="${f1(hh)}" fill="hsl(225 20% ${16+r()*10}%)"/>`; for(let k=10;k<hh-10;k+=16) for(let c=6;c<w-8;c+=12) if (r()<.45) s+=`<rect x="${f1(x+c)}" y="${f1(GY-hh+k)}" width="6" height="8" fill="#ffd27a"/>`; }, 20); break;
    case 8: s+=`<rect x="40" y="${GY}" width="${len-80}" height="90" fill="#2a5a8a"/>`; each(220, x=>{ s+=`<path d="M${x} ${GY+6} h60 l-10 14 h-40z" fill="#eee"/><path d="M${x+30} ${GY+6} v-56 l26 50z" fill="#fff"/>`; }, 120); break;
    case 9: each(220, x=>{ const hh=180+r()*120; s+=`<path d="M${f1(x-60)} ${GY} L${f1(x+50)} ${f1(GY-hh)} L${f1(x+160)} ${GY}z" fill="hsl(260 15% ${26+r()*10}%)"/><path d="M${f1(x+50)} ${f1(GY-hh)} l-26 ${f1(hh*.24)} l14 -8 l12 10 l12 -10 l14 8z" fill="#f2f4ff"/>`; }, 40);
      s+=`<rect x="${(700-600)*14}" y="${GY-70}" width="5" height="70" fill="#ddd"/><path d="M${(700-600)*14+5} ${GY-70} l34 10 l-34 10z" fill="#c98bff"/>`; break;
  }
  return hscene(s, len);
}
function avatar(level, hue){
  const s = `<g transform="translate(0 14)"><g transform="rotate(-38)"><rect x="-6" y="-9" width="${34+level}" height="18" rx="6" fill="hsl(${hue} 30% 30%)" stroke="hsl(${hue} 85% 70%)" stroke-width="2"/><rect x="${26+level}" y="-11" width="6" height="22" rx="2" fill="hsl(${hue} 85% 70%)"/></g>
    <circle r="13" fill="#3a2a1a" stroke="hsl(${hue} 85% 70%)" stroke-width="2"/><circle r="4" fill="hsl(${hue} 85% 70%)"/><path d="M-13 0h26M0 -13v26" stroke="hsl(${hue} 85% 70% / .6)" stroke-width="1.5"/></g>`;
  return avatarSVG(s);
}
const M_ = p => (p*10).toLocaleString();
registerSubject({
  key:"phys", name:"Physics", theme:"A cannon firing your answers further", gemWord:"Light-year", gemTitle:"One in a Light-year", emoji:"🎯",
  blurb:"You're a cannon on the firing range. Each prompt has many correct answers. <b>Obvious answers barely leave the barrel. Answers other players missed fly much further</b>, over fields, forests, rivers and cities, to the mountains at the record range.",
  axis:"right", arrow:"▶", arc:true,
  tiers:{gem:"One in a Light-year", rootkit:"Rocket", trojan:"Long shot", adware:"Lob", spam:"Fizzle"}, blocked:"Misfire", fw:"MISFIRE",
  verbs:{cta:"Advance ▶", inject:"Fire", hint:"▶ rarer answers fly further ▶", count:"reloading"},
  particles:["•","·","∘"], particleColor:"#ffd27a",
  meter:{label:"DISTANCE", fmt:p=>M_(Math.round(p))+" m", zone:p=>M_(p)+' <span style="text-transform:none">m</span>', tick:p=>M_(p)+" m", gain:(a,b)=>`fly ${M_(Math.round(b-a))} m`},
  start:{bg:"linear-gradient(90deg,#0a182c,#0e2440)", label:'Start · 0 <span style="text-transform:none">m</span>', zone:"The firing range", color:"#9fd0ff", deco:len=>hscene(`<rect x="0" y="${GY}" width="${len}" height="${420-GY}" fill="#3d5a2a"/><path d="M${len-420} ${GY} q200 -70 420 0" fill="#4a6a34"/>`, len)},
  endBg:"linear-gradient(90deg,#1a1430,#07060f)",
  bands:BANDS, facts:FACTS, deco:scene, avatar,
  catalog:CATALOG, prompts:PROMPTS,
});
})();
