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
P("ph25","A.2","Name a situation where momentum is conserved.","Decay of a nucleus at rest",[
  ["Collisions",25,"car crash","snooker","collision"],["Explosions",20,"explosion"],["Recoil of a gun or cannon",15,"recoil","gun","cannon"],["Rocket propulsion",12,"rockets","rocket"],
  ["Newton's cradle",8,"newtons cradle"],["Skaters pushing apart",6,"ice skaters"],["Decay of a nucleus at rest",.4,"radioactive decay","alpha decay"]]),
P("ph26","A.3","Name a term about energy transfers or efficiency.","Coefficient of performance",[
  ["Efficiency",25],["Work done",20,"work"],["Power",15],["Useful energy",12,"useful output"],["Wasted energy",12,"wasted","heat losses"],["Sankey diagram",8,"sankey"],["Conservation of energy",8],
  ["Coefficient of performance",.4,"cop"]]),
P("ph27","A.4","Name an everyday example of torque or rotation.","Diver tucking in a somersault",[
  ["Opening a door",20,"door","door handle"],["Using a spanner",18,"spanner","wrench"],["See-saw",12,"seesaw"],["Bicycle pedals",10,"bike pedals","pedals"],["Spinning ice skater",10,"ice skater","figure skater"],
  ["Steering wheel",8],["Gyroscope",4],["Diver tucking in a somersault",.4,"diver","somersault"]], [], HL),
P("ph28","A.4","Name a condition for a rigid body to be in equilibrium.","Torques balance about any point",[
  ["No resultant torque",35,"moments balance","no net torque","sum of torques is zero","clockwise equals anticlockwise"],["No resultant force",30,"forces balance","no net force"],
  ["Principle of moments",15,"moments"],["Constant angular velocity",10],["Torques balance about any point",.4,"any point"]], [], HL),
P("ph29","A.5","Name a concept from Galilean or special relativity.","Minkowski diagram",[
  ["Reference frame",25,"frame of reference"],["Galilean transformation",15,"galilean"],["Relative velocity",15],["Inertial frame",10,"inertial reference frame"],["Postulates of relativity",10,"postulates"],
  ["Proper time",8],["Proper length",6],["Minkowski diagram",.4,"minkowski","spacetime diagram"]], [], HL),
P("ph30","A.5","Name evidence for, or a use of, relativity.","Relativistic Doppler effect",[
  ["Muons reaching the ground",20,"muon","muons","muon decay"],["GPS clock corrections",20,"gps","satellites"],["Particle accelerators",12,"cern","lhc"],["Nuclear energy (E = mc²)",10,"nuclear power","e mc2"],
  ["Atomic clocks on planes",6,"hafele keating","atomic clocks"],["Gravitational lensing",4,"lensing"],["Relativistic Doppler effect",.4,"relativistic doppler"]], [], HL),
P("ph31","B.1","Name a good thermal conductor or insulator.","Aerogel",[
  ["Copper",20],["Air",12],["Wood",12],["Plastic",10],["Aluminium",10,"aluminum"],["Wool",8],["Polystyrene",8],["Silver",4],["Glass",4],["Aerogel",.4]]),
P("ph32","B.1","Name a term about changes of state or heating curves.","Supercooling",[
  ["Latent heat of fusion",20,"fusion"],["Latent heat of vaporisation",20,"vaporisation","vaporization"],["Melting point",15],["Boiling point",15],["Flat section on a heating curve",10,"plateau","flat section"],
  ["Specific latent heat",10,"latent heat"],["Internal energy",6],["Supercooling",.4,"supercooled"]]),
P("ph33","B.2","Name a factor in Earth's energy balance.","Ice–albedo feedback",[
  ["Albedo",20],["Incoming solar radiation",20,"sunlight","solar radiation"],["Infrared emitted by Earth",15,"infrared","outgoing radiation"],["Greenhouse gases",15],["Emissivity",8],
  ["Solar constant",8],["Clouds",6],["Ice–albedo feedback",.4,"ice albedo feedback","feedback"]]),
P("ph34","B.2","Name a way to reduce the enhanced greenhouse effect.","Enhanced rock weathering",[
  ["Renewable energy",30,"solar","wind","renewables"],["Planting trees",15,"reforestation"],["Carbon capture",12,"ccs"],["Nuclear power",10,"nuclear"],["Energy efficiency",10],["Electric vehicles",8,"electric cars"],
  ["Eating less meat",4],["Enhanced rock weathering",.4,"enhanced weathering"]]),
P("ph35","B.3","Name an everyday example of a gas law.","Popcorn popping",[
  ["Tyre pressure rising when hot",20,"tyres","tires"],["Balloon shrinking in the cold",18,"balloon"],["Squeezing a syringe",15,"syringe"],["Aerosol can warnings",10,"aerosol"],["Hot-air balloon",10,"hot air balloon"],
  ["Bike pump getting warm",8,"bike pump"],["Crisp packet swelling on a plane",6,"crisp packet"],["Popcorn popping",.4,"popcorn"]]),
P("ph36","B.3","Name an idea from the kinetic theory of gases.","Root-mean-square speed",[
  ["Particles move randomly",25,"random motion"],["Collisions with walls cause pressure",25,"collisions cause pressure","pressure"],["Temperature ∝ average kinetic energy",20,"kinetic energy","temperature"],
  ["Absolute zero",10],["Elastic collisions",8],["Boltzmann constant",6,"boltzmann"],["Root-mean-square speed",.4,"rms speed","root mean square"]]),
P("ph37","B.4","Name a law or process in thermodynamics.","Third law",[
  ["First law",25,"first law of thermodynamics"],["Second law",20,"second law of thermodynamics"],["Entropy",15],["Isothermal",10],["Adiabatic",10],["Carnot cycle",6,"carnot"],["Isobaric",6],
  ["Isovolumetric",5,"isochoric"],["Third law",.4,"third law of thermodynamics"]], [], HL),
P("ph38","B.4","Name a heat engine, or a term about heat engines.","Stirling engine",[
  ["Car engine",20,"petrol engine","internal combustion engine"],["Steam engine",18],["Efficiency",15],["Hot and cold reservoirs",10,"reservoirs"],["Refrigerator or heat pump",10,"fridge","heat pump"],
  ["Carnot efficiency",8],["Jet engine",6],["Stirling engine",.4,"stirling"]], [], HL),
P("ph39","B.4","Name something that increases entropy.","Shuffling cards",[
  ["Ice melting",20,"melting"],["Heat flowing from hot to cold",20,"heat flow"],["Gas expanding",15,"expansion"],["Mixing",15],["Burning fuel",10,"combustion"],["Dissolving",8],["Shuffling cards",.4,"cards"]], [], HL),
P("ph40","B.5","Name a rule for series or parallel circuits.","Kirchhoff's first law",[
  ["Same current everywhere in series",20,"current same in series"],["Voltage shared in series",20,"voltage splits in series"],["Same voltage across parallel branches",18,"voltage same in parallel"],
  ["Current splits in parallel",18,"current splits"],["Resistances add in series",12,"r1 r2","resistance adds"],["1/R = 1/R₁ + 1/R₂ in parallel",10,"1 r 1 r1 1 r2","parallel resistance"],
  ["Kirchhoff's first law",.4,"kirchhoffs first law","junction rule"]]),
P("ph41","C.1","Name an example of simple harmonic motion.","Quartz crystal in a watch",[
  ["Pendulum",35],["Mass on a spring",30,"spring"],["Guitar string",8],["Tuning fork",8],["Swing",8],["Bungee jumper",4,"bungee"],["Atoms vibrating in a solid",3,"atoms"],["Quartz crystal in a watch",.4,"quartz"]]),
P("ph42","C.1","Name a quantity used to describe simple harmonic motion.","Damping coefficient",[
  ["Amplitude",20],["Period",20,"time period"],["Frequency",18],["Displacement",12],["Angular frequency",10,"omega"],["Phase",8,"phase difference"],["Restoring force",8],["Damping coefficient",.4,"damping"]]),
P("ph43","C.1","Name a defining feature of simple harmonic motion.","Isochronous",[
  ["Acceleration ∝ −displacement",30,"acceleration proportional to displacement","a kx"],["Restoring force towards equilibrium",25,"restoring force"],["Period doesn't depend on amplitude",15,"period independent"],
  ["Energy swaps between KE and PE",15,"energy changes","kinetic and potential"],["Sinusoidal graph",8,"sine wave"],["Isochronous",.4]]),
P("ph44","C.2","Name a difference between transverse and longitudinal waves.","S-waves can't cross liquids",[
  ["Direction of oscillation",35,"oscillation direction","vibrations"],["Examples: light vs sound",20,"light","sound"],["Compressions and rarefactions",15,"compressions","rarefactions"],
  ["Only transverse waves can be polarised",12,"polarisation","polarization"],["Longitudinal waves need a medium",8,"medium"],["S-waves can't cross liquids",.4,"s waves","seismic"]]),
P("ph45","C.2","Name a use of an electromagnetic wave.","Terahertz security scanners",[
  ["Radio broadcasting",15,"radio"],["Microwave cooking",15,"microwave oven","cooking"],["X-ray imaging",15,"x rays","x ray"],["Remote controls (infrared)",10,"remote control","infrared"],
  ["Sterilising with UV",8,"uv","sterilising"],["Radiotherapy with gamma rays",8,"gamma","cancer treatment"],["Fibre optics",6,"optical fibres"],["Wi-Fi",6,"wifi"],["Terahertz security scanners",.4,"terahertz"]]),
P("ph46","C.3","Name an example of diffraction, refraction or interference.","Noise-cancelling headphones",[
  ["Rainbow",15],["A straw looks bent in water",15,"bent straw","straw"],["Hearing sound round corners",12,"round corners"],["Double-slit experiment",12,"double slit","youngs double slit"],
  ["Colours in soap bubbles",10,"soap bubbles","thin film"],["Lenses",8,"glasses"],["Mirage",6],["Rainbow pattern on a CD",6,"cd"],["Noise-cancelling headphones",.4,"noise cancelling"]]),
P("ph47","C.3","Name a law or equation about wave behaviour.","Huygens' principle",[
  ["Snell's law",30,"snells law","n1 sin"],["Law of reflection",20,"angle of incidence equals angle of reflection"],["Wave equation (v = fλ)",15,"v f lambda","wave equation"],["Critical angle",10],
  ["Double-slit equation",8,"s lambda d d","fringe spacing"],["Diffraction grating equation",6,"grating"],["Huygens' principle",.4,"huygens"]]),
P("ph48","C.4","Name a term about standing waves.","Open and closed pipes",[
  ["Node",25,"nodes"],["Antinode",25,"antinodes"],["Harmonic",15,"harmonics"],["Fundamental frequency",15,"fundamental","first harmonic"],["Resonance",10],["Overtones",6,"overtone"],
  ["Open and closed pipes",.4,"pipes","closed pipe"]]),
P("ph49","C.4","Name an example of damping, or a reason to add it.","Tuned mass damper",[
  ["Car shock absorbers",30,"shock absorbers","suspension"],["Earthquake-proof buildings",15,"buildings"],["Bridge dampers",10,"bridges"],["Door closers",8],["A swing slowing down",8,"swing"],
  ["Pendulum slowing in air",6,"pendulum"],["Tuned mass damper",.4,"taipei 101"]]),
P("ph50","C.5","Name an application of the Doppler effect.","Sonar tracking",[
  ["Speed guns",25,"speed camera","radar gun"],["Red shift of galaxies",20,"expanding universe","redshift"],["Siren pitch changing",15,"siren","ambulance"],["Doppler ultrasound",15,"blood flow","ultrasound"],
  ["Weather radar",10],["Finding exoplanets",4,"exoplanets"],["Sonar tracking",.4,"sonar"]]),
P("ph51","C.5","Name a term linked to the Doppler effect.","Sonic boom",[
  ["Frequency shift",25,"change in frequency"],["Red shift",20,"redshift"],["Blue shift",15,"blueshift"],["Moving source",10,"source moving"],["Moving observer",10,"observer moving"],
  ["Wavefronts bunching up",8,"wavefronts"],["Sonic boom",.4]]),
P("ph52","C.5","Name something that changes when a sound or light source moves towards you.","Intensity rises",[
  ["Frequency increases",30,"higher frequency","frequency"],["Pitch goes up",25,"higher pitch","pitch"],["Wavelength gets shorter",25,"shorter wavelength","wavelength"],["Light is blue-shifted",10,"blue shift"],
  ["Intensity rises",.4,"louder","intensity"]]),
P("ph53","D.1","Name a type of orbit or a term about orbits.","Hohmann transfer orbit",[
  ["Geostationary orbit",25,"geostationary","geosynchronous"],["Low Earth orbit",15,"leo"],["Orbital period",10,"period"],["Escape velocity",10],["Satellite",10,"satellites"],["Polar orbit",10,"polar"],
  ["Elliptical orbit",6,"ellipse"],["Hohmann transfer orbit",.4,"hohmann"]]),
P("ph54","D.1","Name a quantity that changes with distance from a planet.","Tidal force",[
  ["Gravitational field strength",30,"g","field strength"],["Gravitational potential",20,"potential"],["Orbital speed",15,"speed"],["Weight",12],["Orbital period",10,"period"],["Tidal force",.4,"tides"]]),
P("ph55","D.2","Name a way to charge an object, or a term about static electricity.","Triboelectric series",[
  ["Rubbing (friction)",30,"friction","rubbing"],["Static electricity",15,"static"],["Charging by induction",15,"induction"],["Charging by contact",15,"conduction","contact"],["Earthing",8,"grounding"],
  ["Van de Graaff generator",6,"van de graaff"],["Triboelectric series",.4,"triboelectric"]]),
P("ph56","D.2","Name a device that uses electric or magnetic fields.","Mass spectrometer",[
  ["Electric motor",25,"motor"],["Loudspeaker",15,"speaker"],["Electromagnet crane",10,"scrapyard crane","electromagnet"],["MRI scanner",8,"mri"],["Maglev train",6,"maglev"],["Relay",6],
  ["Capacitor",6],["Cathode ray tube",4,"crt"],["Mass spectrometer",.4]]),
P("ph57","D.3","Name the path or effect of a charged particle moving in a field.","Cyclotron motion",[
  ["Circular path in a magnetic field",30,"circle","circular"],["Parabolic path in an electric field",20,"parabola","parabolic"],["Force at right angles to velocity",12,"perpendicular force"],
  ["Speeds up in an electric field",12,"accelerates"],["Aurora",6,"northern lights"],["Helical path",6,"helix","spiral"],["Velocity selector",4],["Cyclotron motion",.4,"cyclotron"]]),
P("ph58","D.3","Name an equation or rule for the force on a moving charge or wire.","Lorentz force",[
  ["F = qvB",30,"qvb","f qvb"],["F = qE",25,"qe","f qe"],["Fleming's left-hand rule",20,"left hand rule","flemings"],["F = BIL",12,"bil","f bil"],["r = mv/qB",6,"radius of path"],["Lorentz force",.4,"lorentz"]]),
P("ph59","D.3","Name a technology that steers charged particles with fields.","Hall effect sensor",[
  ["Particle accelerator",25,"lhc","accelerator"],["Mass spectrometer",15],["Old CRT television",12,"crt","cathode ray tube"],["Electron microscope",8],["Cyclotron",6],["Aurora (natural)",8,"aurora"],
  ["Hall effect sensor",.4,"hall probe"]]),
P("ph60","D.4","Name a way to increase an induced emf.","Add an iron core",[
  ["Move faster",25,"faster","speed"],["Stronger magnet",25,"stronger field"],["More turns of wire",25,"more coils","more turns"],["Larger coil area",10,"bigger coil","area"],["Add an iron core",.4,"iron core"]], [], HL),
P("ph61","D.4","Name a term from electromagnetic induction.","Back emf",[
  ["Induced emf",20,"emf","induced voltage"],["Magnetic flux",20,"flux"],["Flux linkage",15],["Induced current",10],["Faraday's law",10,"faraday"],["Lenz's law",10,"lenz"],["Eddy currents",6,"eddy current"],
  ["Back emf",.4]], [], HL),
P("ph62","E.1","Name a result or conclusion of the gold foil experiment.","Estimate of nuclear size",[
  ["Most alpha particles went straight through",30,"straight through","passed through"],["The atom is mostly empty space",25,"empty space"],["A small, dense nucleus",20,"nucleus","dense nucleus"],
  ["The nucleus is positive",12,"positive nucleus"],["A few bounced back",10,"deflected","bounced back"],["Estimate of nuclear size",.4,"nuclear radius"]]),
P("ph63","E.1","Name a feature of atomic energy levels.","Quantised angular momentum",[
  ["Fixed energy levels",30,"energy levels","discrete levels"],["Electrons jump between levels",20,"transitions"],["Photons emitted or absorbed",15,"photons"],["Line spectra",12,"emission spectrum"],
  ["Ground state",8],["Excited state",8],["Ionisation",4,"ionization"],["Quantised angular momentum",.4,"angular momentum"]]),
P("ph64","E.2","Name evidence for the particle nature of light or the wave nature of matter.","Davisson–Germer experiment",[
  ["Photoelectric effect",35,"photoelectric"],["Electron diffraction",20],["Compton scattering",15,"compton"],["de Broglie wavelength",10,"de broglie"],["Line spectra",6],
  ["Davisson–Germer experiment",.4,"davisson germer"]], [], HL),
P("ph65","E.2","Name a term about the photoelectric effect.","Saturation current",[
  ["Threshold frequency",25],["Work function",25],["Photon",15,"photons"],["E = hf",12,"e hf"],["Stopping potential",10],["Planck's constant",8,"planck"],["Saturation current",.4]], [], HL),
P("ph66","E.2","Name an idea from quantum physics.","Pauli exclusion principle",[
  ["Wave–particle duality",25,"wave particle duality"],["Quantisation",15,"quantization","quantised"],["Uncertainty principle",15,"heisenberg"],["Photons",12,"photon"],["Superposition",8],
  ["Quantum tunnelling",8,"tunnelling","tunneling"],["Schrödinger equation",6,"schrodinger"],["Pauli exclusion principle",.4,"pauli"]], [], HL),
P("ph67","E.3","Name a use of radioactivity.","Food irradiation",[
  ["Radiotherapy",25,"cancer treatment"],["Medical tracers",15,"tracers","tracer"],["Carbon dating",15,"radiocarbon dating"],["Smoke detectors",12,"smoke alarm"],["Sterilising equipment",10,"sterilisation"],
  ["Nuclear power",8],["Thickness gauges",6,"thickness"],["Food irradiation",.4]]),
P("ph68","E.3","Name a way to protect people from radiation.","Potassium iodide tablets",[
  ["Lead shielding",30,"lead","shielding"],["Keeping your distance",20,"distance"],["Limiting exposure time",15,"time"],["Dosimeter badges",10,"film badge","dosimeter"],["Protective clothing",8],["Concrete walls",6,"concrete"],
  ["Potassium iodide tablets",.4,"potassium iodide","iodine tablets"]]),
P("ph69","E.4","Name an advantage or a disadvantage of nuclear power.","Weapons proliferation",[
  ["No CO₂ emissions",30,"low carbon","no greenhouse gases","no co2"],["Radioactive waste",25,"waste"],["Risk of accidents",15,"accidents","meltdown"],["High energy density",10,"lots of energy"],
  ["Expensive to build",8,"cost"],["Reliable baseload",6,"reliable"],["Decommissioning costs",4,"decommissioning"],["Weapons proliferation",.4,"proliferation"]]),
P("ph70","E.4","Name a nuclear accident or a type of reactor.","Kyshtym disaster",[
  ["Chernobyl",35],["Fukushima",30],["Three Mile Island",12],["Pressurised water reactor",6,"pwr"],["Breeder reactor",4,"fast breeder"],["Magnox",2],["Kyshtym disaster",.4,"kyshtym"]]),
P("ph71","E.5","Name a requirement for, or a fact about, nuclear fusion.","Proton–proton chain",[
  ["Very high temperature",30,"high temperature","millions of degrees"],["High pressure or density",20,"high pressure","density"],["Hydrogen fuses into helium",20,"hydrogen","helium"],["Powers the Sun",15,"sun","stars"],
  ["Tokamak",6],["ITER",4],["Proton–proton chain",.4,"pp chain","proton proton chain"]]),
P("ph72","E.5","Name a property used to classify stars.","Metallicity",[
  ["Luminosity",25,"brightness"],["Temperature",20],["Colour",15,"color"],["Mass",12],["Radius",10,"size"],["Spectral class",8,"spectral type","obafgkm"],["Hertzsprung–Russell diagram",8,"hr diagram","hertzsprung russell"],
  ["Metallicity",.4]]),
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
  beyond:"Over the horizon",
  catalog:CATALOG, prompts:PROMPTS,
});
})();
