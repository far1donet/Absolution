/* Computer Science — world, syllabus and prompt bank, organised by the IB Computer Science syllabus (first assessment 2027).
   Each prompt: P(id, spec, question, gem, answers, traps, hl)
     answers: [label, expected popularity weight, ...aliases]   (higher weight = more people say it)
     gem: label of the one rare "One in a Computer" answer
     traps: [[aliases...], "why it's wrong"]
     hl: true if the subtopic is HL only
   Keep ids stable: class stats are stored by id. */

(function(){
const CATALOG = [
  {code:"A", name:"Concepts of computer science", units:[
    {code:"A1", name:"Computer fundamentals", topics:[
      ["A1.1","Computer hardware and operation"],["A1.2","Data representation and computer logic"],
      ["A1.3","Operating systems and control systems"],["A1.4","Translation",HL]]},
    {code:"A2", name:"Networks", topics:[
      ["A2.1","Network fundamentals"],["A2.2","Network architecture"],["A2.3","Data transmission"],["A2.4","Network security"]]},
    {code:"A3", name:"Databases", topics:[
      ["A3.1","Database fundamentals"],["A3.2","Database design"],["A3.3","Database programming"],["A3.4","Alternative databases and data warehouses",HL]]},
    {code:"A4", name:"Machine learning", topics:[
      ["A4.1","Machine learning fundamentals"],["A4.2","Data preprocessing",HL],["A4.3","Machine learning approaches"],["A4.4","Ethical considerations"]]},
  ]},
  {code:"B", name:"Computational thinking and problem-solving", units:[
    {code:"B1", name:"Computational thinking", topics:[["B1.1","Approaches to computational thinking"]]},
    {code:"B2", name:"Programming", topics:[
      ["B2.1","Programming fundamentals"],["B2.2","Data structures"],["B2.3","Programming constructs"],["B2.4","Programming algorithms"],["B2.5","File processing"]]},
    {code:"B3", name:"Object-oriented programming", topics:[["B3.1","Fundamentals of OOP for a single class"],["B3.2","Fundamentals of OOP for multiple classes",HL]]},
    {code:"B4", name:"Abstract data types", topics:[["B4.1","Fundamentals of abstract data types",HL]]},
  ]},
];


const PROMPTS = [
/* ---------------- A1.1 Computer hardware and operation ---------------- */
P("c01","A1.1.1","Name a component or register inside the CPU.","Instruction register",[
  ["ALU",30,"arithmetic logic unit","arithmetic and logic unit"],["Control unit",26,"cu"],["Registers",10,"register"],
  ["Cache",9,"cache memory","l1","l2","l3","l1 cache","l2 cache","l3 cache"],["Program counter",7,"pc"],["Accumulator",5,"acc","ac"],
  ["MAR",5,"memory address register"],["MDR",4,"memory data register","mbr","memory buffer register"],["Core",2,"cores","processor core"],
  ["Internal buses",1.5,"bus","buses","internal bus"],["Clock",1.5,"system clock"],["Instruction register",.4,"ir","cir","current instruction register"]],
  [[["ram","rom","hdd","ssd","hard drive","gpu","motherboard","power supply","psu","main memory"],"That's outside the CPU, on the motherboard or in a separate device."]]),
P("c02","A1.1.1","Name something the ALU does.","Sets status flags",[
  ["Arithmetic / calculations",30,"arithmetic","calculations","calculation","calculates","maths","math","arithmetic operations","does calculations","performs calculations"],
  ["Addition",12,"add","adding","adds","adds numbers"],["Subtraction",8,"subtract","subtracting","subtracts"],
  ["Logic operations",12,"logic","logical operations","logical","boolean logic","boolean","and or not","logic gates"],
  ["Comparisons",10,"compare","comparing","compares","compares values","comparison","greater than","less than"],
  ["Multiplication / division",4,"multiply","multiplication","divide","division"],
  ["Stores results in the accumulator",4,"accumulator","result to accumulator","stores result","saves result"],
  ["Bit shifts",1.5,"shift","shifting","bit shift","binary shift","shift left","shift right"],["Increment / decrement",1,"increment","decrement","add one"],
  ["Sets status flags",.4,"flags","status flags","sets flags","overflow flag","zero flag","carry flag","overflow","sets the flags"]],
  [[["fetch","fetches","fetches instructions","decode","decodes","decoding","decodes instructions","control signals","sends control signals","controls the cpu"],"That's the Control Unit's job, not the ALU's."]]),
P("c03","A1.1.1","Name a job the Control Unit does.","Handles interrupts",[
  ["Decodes instructions",28,"decode","decoding","decodes","decode instructions"],["Sends control signals",18,"control signals","control signal","sends signals","signals"],
  ["Controls / coordinates the CPU",16,"controls","coordinates","controls the cpu","coordinates components","manages","directs","controls components","control","controls everything"],
  ["Fetches instructions",12,"fetch","fetching","fetches","fetch instructions"],
  ["Runs the fetch-decode-execute cycle",6,"fde","fde cycle","fetch decode execute","fetch decode execute cycle","machine cycle","instruction cycle"],
  ["Directs the flow of data",5,"data flow","moves data","directs data","controls data flow","flow of data"],
  ["Tells the ALU what to do",4,"controls the alu","tells the alu","tells the alu what to do","alu"],
  ["Syncs with the clock",3,"clock","timing","synchronises","synchronizes","clock signal","uses the clock"],
  ["Tells memory to read or write",2,"read","write","read write","read signal","write signal","memory read"],
  ["Updates the program counter",1.5,"program counter","pc","increment pc","increments pc","updates pc"],["Handles interrupts",.4,"interrupts","interrupt","interrupt handling"]],
  [[["calculations","calculation","arithmetic","maths","math","adds numbers","does calculations","performs calculations","logic operations"],"That's the ALU's job. The Control Unit decides what happens; the ALU does the maths."]]),
P("c04","A1.1.1","Name a register in the CPU.","Status register",[
  ["Program counter",28,"pc"],["MAR",18,"memory address register"],["MDR",16,"memory data register","mbr","memory buffer register"],
  ["Accumulator",14,"acc","ac"],["Instruction register",10,"ir","cir","current instruction register"],
  ["General-purpose register",3,"general purpose register","general purpose","gpr","r0","r1","eax"],["Stack pointer",1,"sp"],["Index register",.6,"index"],
  ["Status register",.4,"flags register","flag register","flags","sr","psw","status","status flags"]],
  [[["alu","cu","control unit","cache","ram","rom","bus"],"That's a CPU part or memory, not a register."]]),
P("c05","A1.1.1","Name one of the three system buses, or something one of them carries.","Interrupt signal",[
  ["Data bus",28,"data","data and instructions","instructions"],["Address bus",22,"address","addresses","memory address","memory addresses"],
  ["Control bus",20,"control","control signals","control signal"],["Read signal",4,"read","read request","memory read"],
  ["Write signal",3,"write","write request","memory write"],["Clock signal",3,"clock","clock pulse","timing signal"],
  ["Bus request / grant",.8,"bus request","bus grant"],["Interrupt signal",.4,"interrupt","interrupts","irq"]],
  [[["usb","pci","pcie","sata","usb bus"],"That's a peripheral or expansion bus. The CPU's three system buses are address, data and control."]]),
P("c06","A1.1.1","Name a type of processor or co-processor.","Neural processing unit",[
  ["Multi-core processor",25,"multi core","multicore","multi core processor","dual core","quad core","octa core"],
  ["Single-core processor",20,"single core","single core processor","uniprocessor"],["GPU",20,"graphics card","graphics processor","graphics processing unit"],
  ["CPU",10,"central processing unit"],["Co-processor",6,"coprocessor","co processor"],
  ["FPU / maths co-processor",2,"fpu","floating point unit","maths coprocessor","math coprocessor","math co processor"],
  ["DSP",1,"digital signal processor","sound processor","audio processor"],["Security processor",1,"crypto processor","security chip","tpm","secure enclave"],
  ["Microcontroller",1,"mcu","arduino"],["Neural processing unit",.4,"npu","tpu","ai accelerator","neural engine","ai chip"]],
  [[["ram","ssd","hdd","rom","cache"],"That's memory or storage, not a processor."]]),
P("a1101","A1.1.2","Name a task a GPU is especially good at.","Protein folding",[
  ["Gaming",30,"games","video games","3d games"],["Graphics rendering",20,"graphics","rendering","3d rendering","image rendering"],
  ["AI / machine learning",15,"ai","machine learning","deep learning","training ai","neural networks","ml"],
  ["Video editing",12,"video rendering","video encoding","video","editing videos"],["Crypto mining",8,"mining","bitcoin mining","cryptocurrency mining","crypto"],
  ["Image processing",4,"photo editing","image editing","filters"],["Scientific simulation",3,"simulations","simulation","physics simulation","weather forecasting"],
  ["Ray tracing",2,"raytracing"],["Password cracking",1,"brute force","hash cracking"],["Matrix maths",1,"matrix multiplication","matrix operations","linear algebra"],
  ["Protein folding",.3,"molecular modelling","folding at home","dna sequencing","genome sequencing"]],
  [[["word processing","typing","email","spreadsheets","browsing"],"That work is mostly sequential, so a CPU handles it better than a GPU."]]),
P("a1102","A1.1.3","Name a way a GPU differs from a CPU.","Built for SIMD",[
  ["Many more cores",30,"more cores","thousands of cores","hundreds of cores","lots of cores","many cores"],
  ["Parallel processing",25,"parallel","processes in parallel","many tasks at once","parallelism","does many calculations at once"],
  ["Specialised for graphics",12,"graphics","designed for graphics","made for graphics"],["Simpler cores",8,"simpler","simple cores","less complex cores","smaller cores"],
  ["Worse at sequential tasks",5,"sequential","not general purpose","less flexible","bad at complex logic","worse at branching"],
  ["Has its own memory (VRAM)",4,"vram","dedicated memory","own memory","video memory"],["Higher memory bandwidth",3,"bandwidth","memory bandwidth"],
  ["Lower clock speed",3,"slower clock","lower clock","lower clock speed"],["Uses more power",3,"more power","power hungry","more heat","hotter"],
  ["Built for SIMD",.4,"simd","single instruction multiple data"]]),
P("a1103","A1.1.4","Name a type of primary memory.","L3 cache",[
  ["RAM",40,"random access memory","main memory"],["ROM",25,"read only memory"],["Cache",15,"cache memory"],["Registers",10,"register"],
  ["DRAM",3,"dynamic ram","ddr","ddr4","ddr5"],["SRAM",2,"static ram"],["L1 cache",1.5,"l1","level 1","level 1 cache"],["L2 cache",1,"l2","level 2","level 2 cache"],
  ["VRAM",1.5,"video ram","video memory"],["EEPROM / flash ROM",1,"eeprom","eprom","prom","flash rom","bios chip"],["L3 cache",.4,"l3","level 3","level 3 cache","shared cache"]],
  [[["hdd","ssd","hard drive","usb","flash drive","cd","dvd","nas","sd card"],"That's secondary storage: it keeps data with the power off and the CPU can't run from it directly."]]),
P("a1104","A1.1.4","Name a difference between RAM and ROM.","RAM can be upgraded",[
  ["RAM is volatile, ROM is not",35,"volatile","non volatile","nonvolatile","rom keeps data","ram loses data","ram is volatile","rom is non volatile"],
  ["ROM is read-only, RAM is read/write",20,"read only","read write","rom cannot be changed","ram can be written","can't write to rom"],
  ["ROM holds the boot instructions",15,"boot","bios","firmware","startup instructions","bootstrap","boot program","uefi"],
  ["RAM holds programs in use",10,"programs in use","running programs","current data","data in use","programs currently running"],
  ["RAM is larger",6,"bigger","larger","larger capacity","more storage","more space"],["RAM is faster",4,"faster","speed"],
  ["ROM is written at the factory",2,"manufacturer","factory","written once","set by manufacturer"],["RAM can be upgraded",.4,"upgrade","upgradeable","upgradable","add more ram"]]),
P("a1105","A1.1.6","Name a benefit or problem of pipelining.","Structural hazards",[
  ["Faster / higher throughput",35,"faster","throughput","speed","more instructions per second","quicker","speeds up"],
  ["Stages overlap, so less idle time",12,"overlap","overlapping","parallel stages","no idle stages","less idle time","idle"],
  ["A branch forces a pipeline flush",6,"branch","jump","flush","pipeline flush","branching"],
  ["Data hazards / dependencies",5,"dependency","dependencies","data hazard","hazards","depends on previous result"],
  ["Stalls (bubbles)",5,"stall","stalls","stalling","bubble","bubbles"],["More complex design",4,"complex","complexity","harder to design"],
  ["Each core in a multi-core CPU runs its own pipeline",3,"multicore","multi core","multiple cores","each core"],
  ["Structural hazards",.4,"structural hazard","resource conflict","resource conflicts"]], [], HL),
P("a1106","A1.1.7","Name a type of secondary storage.","eMMC",[
  ["HDD",30,"hard disk drive","hard drive","hard disk","magnetic disk"],["SSD",28,"solid state drive","solid state"],
  ["USB flash drive",18,"usb","usb drive","flash drive","usb stick","pen drive","thumb drive","memory stick"],
  ["Memory card",8,"sd card","sd","micro sd","microsd","compact flash","cf card"],
  ["Optical disc",8,"cd","dvd","blu ray","bluray","optical drive","cd rom","compact disc","optical"],
  ["Cloud storage",4,"cloud","google drive","onedrive","icloud","dropbox"],["NAS",3,"network attached storage"],
  ["Magnetic tape",1.5,"tape","tape drive"],["Floppy disk",1.5,"floppy","diskette"],["eMMC",.4,"embedded multimedia card","embedded multi media card"]],
  [[["ram","rom","random access memory","read only memory","cache","registers"],"RAM, ROM, cache and registers are primary memory, not secondary storage."]]),
P("a1107","A1.1.7","Name a reason to choose an SSD over an HDD.","No fragmentation slowdown",[
  ["Faster",35,"speed","faster read","faster write","faster speed","quicker"],["No moving parts / durable",20,"no moving parts","durable","more durable","shock resistant","robust"],
  ["Uses less power",10,"less power","energy efficient","less energy","lower power","battery life"],["Faster boot",8,"faster boot times","boots faster","faster startup"],
  ["Silent",8,"quieter","no noise","quiet"],["Smaller / lighter",8,"smaller","lighter","compact","thinner"],
  ["Lower latency",3,"faster access time","access time","latency"],["Runs cooler",3,"less heat","cooler"],
  ["No fragmentation slowdown",.3,"no fragmentation","no defragmentation","no need to defragment","fragmentation"]],
  [[["cheaper","cheap","more storage","bigger capacity","more capacity","cheaper per gb"],"HDDs usually win on price and capacity for the money. SSDs cost more per gigabyte."]]),
P("a1108","A1.1.8","Name a technique or algorithm used to compress data.","Discrete wavelet transform",[
  ["Run-length encoding",25,"rle","run length encoding"],["Lossy compression",15,"lossy"],["Lossless compression",15,"lossless"],
  ["Huffman coding",12,"huffman"],["Transform coding",6,"transform"],["DCT",2,"discrete cosine transform"],
  ["Dictionary coding (LZW)",4,"lzw","lz77","lz78","lempel ziv","deflate","dictionary coding","dictionary compression"],
  ["Quantisation",3,"quantization","reducing colour depth","reduce colour depth","reduce bit depth"],
  ["Downsampling",3,"chroma subsampling","subsampling","reduce sample rate","lower sample rate","reduce resolution","lower resolution"],
  ["Delta encoding",1,"delta compression","inter frame compression","interframe compression"],["Discrete wavelet transform",.3,"dwt","wavelet","wavelet transform"]],
  [[["zip","jpeg","jpg","mp3","png","mp4"],"That's a file format. The prompt wants the technique inside it."]]),
P("a1109","A1.1.8","Name a file format that uses compression.","FLAC",[
  ["JPEG",25,"jpg"],["MP3",20],["ZIP",18,"zip file"],["MP4",12,"mpeg4","mpeg 4","h264","h 264","h265","hevc"],["PNG",8],["GIF",5],
  ["RAR",3],["7z",1,"7zip","7 zip"],["GZIP",1,"gz","tar gz","tgz"],["AAC",2,"m4a"],["WebP",1],["HEIC",1,"heif"],
  ["MOV",1,"quicktime"],["OGG",.8,"vorbis","opus"],["FLAC",.4,"free lossless audio codec"]],
  [[["wav","bmp","txt","raw","tiff"],"That format is usually stored uncompressed."]]),
P("a1110","A1.1.8","Name a reason to compress a file.","Saves energy",[
  ["Saves storage space",40,"storage","space","save space","less storage","smaller file","smaller files","reduce file size","file size"],
  ["Faster to send or download",30,"faster download","faster upload","faster transfer","faster to send","less bandwidth","bandwidth","transfer"],
  ["Fits email attachment limits",6,"email","attachment","attachment size","email limit"],["Smoother streaming",6,"streaming","buffering","less buffering"],
  ["Archiving / backups",4,"backup","backups","archive","archiving"],["Bundles many files into one",3,"bundle","one file","many files","group files"],
  ["Lower costs",3,"cheaper","cost","data costs","cheaper storage"],["Saves energy",.4,"energy","less energy","power","less power"]]),
P("a1111","A1.1.9","Name a cloud computing service model, or an example of one.","FaaS (serverless)",[
  ["SaaS",25,"software as a service"],["IaaS",18,"infrastructure as a service"],["PaaS",15,"platform as a service"],
  ["Google Docs / Microsoft 365 (SaaS)",10,"google docs","google drive","gmail","office 365","microsoft 365","dropbox","icloud","canva"],
  ["AWS EC2 / Azure VMs (IaaS)",6,"aws","amazon web services","ec2","azure","azure virtual machines","google compute engine","virtual machines"],
  ["Heroku / Google App Engine (PaaS)",2,"heroku","app engine","google app engine","elastic beanstalk","firebase"],
  ["FaaS (serverless)",.4,"faas","function as a service","serverless","lambda","aws lambda"]]),
P("a1112","A1.1.9","Name an advantage or a risk of cloud computing.","Data sovereignty",[
  ["Access from anywhere",30,"anywhere","any device","remote access","access anywhere","access from any device"],
  ["Needs an internet connection",15,"internet","internet connection","needs internet","requires internet","offline"],
  ["Security and privacy risks",12,"security","privacy","hacking","data breach","data breaches"],["Scalable",12,"scale","scalability","elastic","easy to scale"],
  ["No hardware to buy or maintain",10,"no maintenance","cheaper","lower upfront cost","pay as you go","no hardware","cost"],
  ["Automatic backups",8,"backup","backups"],["Easy collaboration",5,"collaborate","collaboration","sharing","real time collaboration"],
  ["Outages / downtime",2,"outage","outages","downtime"],["Vendor lock-in",1.5,"lock in","vendor lock in"],
  ["Data sovereignty",.4,"data sovereignty","jurisdiction","data stored in another country","gdpr"]]),
P("c07","A1.1.5","Name a stage or step of the fetch-decode-execute cycle.","Check for interrupts",[
  ["Fetch",28],["Decode",22],["Execute",22],
  ["Increment the PC",6,"increment pc","pc increments","pc incremented","add 1 to pc","increment program counter","update pc","increment the program counter"],
  ["Copy PC to MAR",4,"pc to mar","address to mar","copy address to mar","copy pc to mar"],
  ["Read instruction into MDR",3,"instruction to mdr","load into mdr","memory to mdr","mdr"],
  ["Copy MDR to IR",2,"mdr to ir","mdr to cir","copy to ir","copy mdr to ir"],["Store / write back",2,"store","write back","writeback","store result"],
  ["Send read signal",1,"read signal","control bus read","send read signal"],["Check for interrupts",.4,"interrupts","interrupt check","interrupt","check interrupts"]]),
P("c08","A1.1.5","Name a component used during the FETCH stage.","Control bus",[
  ["Program counter",22,"pc"],["MAR",16,"memory address register"],["MDR",14,"memory data register","mbr"],
  ["RAM / main memory",14,"ram","main memory","memory","primary memory"],["Instruction register",8,"ir","cir","current instruction register"],
  ["Address bus",7,"address"],["Data bus",6,"data"],["Control unit",6,"cu"],["Cache",3,"cache memory"],["Control bus",.4,"read signal","control signal"]],
  [[["alu","accumulator","acc","ac"],"The ALU and accumulator do their work in the execute stage, not fetch."]]),
P("c09","A1.1.5","Name something that can happen in the EXECUTE stage.","PC overwritten by a jump",[
  ["ALU does a calculation",30,"calculation","calculations","calculate","arithmetic","alu","maths","add","addition","subtract","subtraction","alu calculates"],
  ["Result stored in accumulator",14,"accumulator","acc","stored in accumulator","result stored","store result","saved in accumulator"],
  ["Logic operation",6,"logic","logical operation","logic operations"],["Comparison",6,"compare","comparing","comparison"],
  ["Data loaded from memory",6,"load","load data","loading data","read from memory","data loaded"],
  ["Data written to memory",5,"write to memory","save to memory","written to memory","store to memory","store in memory"],
  ["Output to a device",2,"output","display","print"],["Halt",1,"stop","halt the program","end program"],
  ["PC overwritten by a jump",.4,"jump","branch","jmp","pc changed","pc overwritten","goto","jump instruction"]],
  [[["decode","fetch","decoding","fetching"],"That happens earlier in the cycle, before execute."]]),
P("c10","A1.1.5","Name a reason the program counter changes.","Returning from a subroutine",[
  ["Incremented after each fetch",35,"increment","increments","incremented","add 1","plus 1","next instruction","goes to next instruction","increased","increases","adds one","add one","incremented after fetch"],
  ["Jump / branch instruction",15,"jump","branch","jmp","goto","jump instruction","branch instruction"],
  ["IF statement or loop",6,"if statement","loop","loops","selection","iteration","condition"],
  ["Interrupt",5,"interrupts","interrupt occurs"],["Calling a subroutine",3,"subroutine","function call","calling a function","procedure call","call"],
  ["Reset / boot",1.5,"reset","boot","restart","power on","startup"],["Returning from a subroutine",.4,"return","ret","return from function","returning"]]),

/* ---------------- A1.2 Data representation and computer logic ---------------- */
P("a1201","A1.2.3","Name a logic gate.","Buffer",[
  ["AND",30],["OR",25],["NOT",20,"inverter"],["XOR",8,"exclusive or","eor"],["NAND",8,"not and"],["NOR",6,"not or"],["XNOR",2,"exclusive nor","nxor"],["Buffer",.4,"buffer gate"]]),
P("a1202","A1.2.1","Name a number system or a way of representing data in binary.","BCD",[
  ["Binary",25,"base 2","base2"],["Hexadecimal",20,"hex","base 16","base16"],["Denary / decimal",12,"decimal","denary","base 10","base10"],
  ["ASCII",12],["Unicode",8,"utf 8","utf8","utf 16"],["Two's complement",4,"twos complement","two s complement"],["RGB colour codes",4,"rgb","colour codes","color codes","hex colour","hex color"],
  ["Octal",3,"base 8","base8"],["Floating point",2,"float","floating point","mantissa and exponent"],["Sign and magnitude",1,"sign magnitude","signed magnitude"],
  ["BCD",.4,"binary coded decimal"]]),
P("a1203","A1.2.2","Name something that affects the file size of an image or sound file.","Frame rate",[
  ["Resolution",25,"pixels","number of pixels","image size","dimensions"],["Colour depth / bit depth",18,"colour depth","color depth","bit depth","bits per pixel","bits per sample"],
  ["Sample rate",15,"sampling rate","sample frequency","sampling frequency"],["Length / duration",12,"length","duration","time","how long"],
  ["Compression",12,"compressed","compression type","lossy","lossless"],["Number of channels (mono / stereo)",3,"stereo","mono","channels"],
  ["Metadata",2,"meta data","exif"],["Frame rate",.4,"fps","frames per second"]]),
P("a1204","A1.2.2","Name a unit of data storage.","Yottabyte",[
  ["Byte",20,"bytes"],["Kilobyte",15,"kb"],["Megabyte",15,"mb"],["Gigabyte",15,"gb"],["Terabyte",10,"tb"],["Bit",10,"bits"],
  ["Nibble",3,"nybble"],["Petabyte",3,"pb"],["Exabyte",1.5,"eb"],["Kibibyte / mebibyte",1,"kib","mib","gib","kibibyte","mebibyte","gibibyte"],
  ["Zettabyte",.6,"zb"],["Yottabyte",.3,"yb"]]),
P("a1205","A1.2.3","Name a real-world use of logic gates.","Multiplexer",[
  ["Inside the CPU / ALU",12,"cpu","alu","processor"],["Adders / calculators",15,"adder","half adder","full adder","calculator","calculators","binary addition"],
  ["Alarm systems",15,"alarm","burglar alarm","security system","alarm system"],["Traffic lights",10,"traffic light"],
  ["Washing machines",4,"washing machine"],["Lifts / elevators",3,"lift","elevator","elevators"],["Car door or seatbelt warnings",3,"car door","seatbelt","seatbelt warning","car"],
  ["Memory (flip-flops)",3,"flip flop","flip flops","latch","memory"],["Comparators",2,"comparator"],["Multiplexer",.4,"mux","multiplexer","demultiplexer","decoder"]]),
P("a1206","A1.2.4","Name a tool or technique for working out what a logic circuit does.","Sum of products",[
  ["Truth table",35,"truth tables"],["Logic diagram",20,"circuit diagram","logic circuit","logic circuit diagram"],
  ["Boolean expression",15,"boolean algebra","boolean expression","boolean"],["Karnaugh map",3,"k map","kmap","karnaugh"],
  ["De Morgan's laws",3,"de morgan","demorgan","de morgans law"],["Simulation software",3,"logisim","simulator","circuit simulator"],
  ["Sum of products",.4,"sop","sum of products","product of sums","pos"]]),

/* ---------------- A1.3 Operating systems and control systems ---------------- */
P("a1301","A1.3.2","Name a function of an operating system.","Virtualisation",[
  ["Memory management",25,"memory","managing memory","ram management"],["File management",18,"file system","files","file management","managing files"],
  ["Process scheduling / multitasking",12,"scheduling","process management","multitasking","cpu scheduling"],
  ["User interface",12,"ui","gui","interface","user interface"],["Device management / drivers",10,"drivers","device drivers","peripherals","hardware management","device management"],
  ["Security / user accounts",10,"security","passwords","user accounts","access control","authentication","user management"],
  ["Networking",3,"network","network management"],["Error handling",2,"errors"],["Accounting / logging",1,"accounting","resource usage","logs","logging"],
  ["Virtualisation",.4,"virtualization","virtual machines","virtual memory"]],
  [[["word processing","browsing","web browsing","gaming","spreadsheets"],"That's done by application software, not the operating system."]]),
P("a1302","A1.3.3","Name a CPU scheduling algorithm.","Multilevel feedback queue",[
  ["Round robin",30,"rr"],["First come first served",25,"fcfs","fifo","first in first out"],["Priority scheduling",15,"priority"],
  ["Shortest job first",12,"sjf","shortest job next","sjn"],["Multilevel queue",6,"multi level queue","multilevel"],
  ["Shortest remaining time",3,"srt","srtf","shortest remaining time first"],["Multilevel feedback queue",.4,"mlfq","feedback queue","multilevel feedback queue"]]),
P("a1303","A1.3.4","Name an event that is better handled by an interrupt than by polling.","Low battery warning",[
  ["Key press",25,"keyboard","keypress","keyboard input","pressing a key"],["Mouse click",15,"mouse","mouse movement"],
  ["Printer finished / out of paper",8,"printer","out of paper","paper jam"],["Timer tick",6,"timer","clock tick"],["Network data arriving",6,"network packet","data arrives","network card","packet arrives"],
  ["Touchscreen tap",5,"touch","touchscreen","tap"],["Hardware or power failure",5,"power failure","hardware error","hardware failure"],
  ["Disk transfer complete",2,"disk","io complete","transfer complete"],["Software error (divide by zero)",2,"divide by zero","software interrupt","exception"],
  ["Low battery warning",.4,"battery","low battery"]]),
P("a1304","A1.3.5","Name a resource the operating system has to share between running programs.","Battery power",[
  ["CPU time",30,"cpu","processor","processing time","processor time"],["Memory / RAM",30,"memory","ram"],
  ["Storage",10,"disk","hard drive","storage space","files","disk space"],["Printers and peripherals",6,"printer","devices","io devices","peripherals"],
  ["Network bandwidth",5,"network","bandwidth","internet"],["Cache",3],["GPU",2,"graphics card"],["Battery power",.4,"battery","power","energy"]], [], HL),
P("a1305","A1.3.6","Name a component of a control system.","Setpoint",[
  ["Sensor",30,"sensors"],["Actuator",20,"actuators","motor","motors"],["Controller / microprocessor",15,"controller","microcontroller","processor","cpu","microprocessor"],
  ["Feedback",10,"feedback loop","closed loop","closed loop feedback"],["Input",6],["Output",6],["Transducer",2],["Control algorithm",2,"algorithm"],
  ["Setpoint",.4,"set point","desired value","target value"]], [], HL),
P("a1306","A1.3.7","Name a real-world control system.","Insulin pump",[
  ["Thermostat / heating",22,"thermostat","central heating","air conditioning","heating system","heating"],["Traffic lights",18,"traffic light","traffic signals"],
  ["Self-driving car / cruise control",12,"self driving car","autonomous vehicle","autonomous car","cruise control","tesla"],["Washing machine",10],
  ["Automatic doors",8,"automatic door","sliding doors"],["Lift / elevator",7,"lift","elevator"],["Security alarm",5,"burglar alarm","alarm system","alarm"],
  ["Irrigation system",4,"sprinkler","irrigation","sprinklers"],["Oven / microwave",4,"oven","microwave"],["Greenhouse",3],["Autopilot",2,"plane autopilot"],
  ["Insulin pump",.4,"insulin","pacemaker"]], [], HL),

/* ---------------- A1.4 Translation (HL) ---------------- */
P("a1401","A1.4.1","Name a difference between a compiler and an interpreter.","JIT compilation",[
  ["Whole program at once vs line by line",40,"whole program","all at once","line by line","translates the whole code","one line at a time"],
  ["Compiler makes an executable file",15,"executable","exe","object code","machine code file","creates a file"],
  ["Interpreted code runs slower",12,"slower","faster","speed","execution speed","runs faster"],
  ["Error reporting differs",8,"errors","error reporting","stops at error","reports all errors","stops at first error"],
  ["Compiling takes time up front",4,"compile time","takes time to compile"],["Interpreter needed every time it runs",4,"interpreter needed","source code needed","translator needed every time"],
  ["Compiled code hides the source",3,"protects source code","source code hidden","hides source code"],
  ["Compiled code is platform-specific",2,"platform specific","portability","cross platform"],["JIT compilation",.4,"jit","just in time","just in time compilation"]], [], HL),
P("a1402","A1.4.1","Name a type of translator, or a level of programming language.","Linker",[
  ["Compiler",30],["Interpreter",25],["Assembler",15],["Machine code",8,"binary","machine language"],["High-level language",8,"high level"],
  ["Low-level language",5,"low level"],["Assembly language",5,"assembly"],["Bytecode",2,"byte code"],["Linker",.4,"loader","linker and loader"]], [], HL),
P("a1403","A1.4.1","Name a situation where an interpreter is the better choice.","Interactive shell (REPL)",[
  ["Debugging / testing",30,"debugging","testing","development","finding errors","while developing"],
  ["Learning to program",12,"beginners","learning","education","students"],
  ["Running on different platforms",10,"cross platform","portability","different computers","different operating systems","portable"],
  ["Scripts / small programs",8,"scripting","scripts","small programs","quick scripts"],["Code in web browsers",6,"javascript in browser","web","websites","browser"],
  ["Code that changes often",6,"changing code","prototyping","rapid development","frequent changes"],["Interactive shell (REPL)",.4,"repl","shell","interactive","interactive mode"]], [], HL),

/* ---------------- A2.1 Network fundamentals ---------------- */
P("a2101","A2.1.1","Name a type of network.","Extranet",[
  ["LAN",30,"local area network"],["WAN",25,"wide area network"],["PAN",8,"personal area network"],["VPN",8,"virtual private network"],
  ["MAN",6,"metropolitan area network"],["WLAN",6,"wireless lan","wireless local area network","wifi network"],["The internet",4,"internet"],
  ["Intranet",2],["SAN",1,"storage area network"],["Extranet",.4]]),
P("a2102","A2.1.2","Name a network hardware device.","Load balancer",[
  ["Router",30],["Switch",18,"network switch"],["Modem",12],["Firewall",8,"hardware firewall"],["Wireless access point",8,"wap","access point"],
  ["NIC",6,"network interface card","network card"],["Hub",4],["Gateway",4],["Repeater",2],["Bridge",1.5],["Load balancer",.4]]),
P("a2103","A2.1.3","Name a network protocol.","ARP",[
  ["HTTP",22,"hypertext transfer protocol"],["HTTPS",18],["TCP",12,"transmission control protocol"],["IP",10,"internet protocol"],["FTP",6,"file transfer protocol"],
  ["SMTP",5],["UDP",5,"user datagram protocol"],["DNS",4,"domain name system"],["DHCP",3],["TLS / SSL",3,"tls","ssl"],["POP3",2,"pop"],["IMAP",2],["SSH",1.5,"secure shell"],
  ["ARP",.4,"address resolution protocol"]]),
P("a2104","A2.1.3","Name a protocol used for email.","MAPI",[
  ["SMTP",35,"simple mail transfer protocol"],["POP3",25,"pop","post office protocol"],["IMAP",20,"internet message access protocol"],
  ["MIME",4],["TLS / STARTTLS",3,"tls","starttls","ssl"],["HTTPS (webmail)",3,"https","webmail"],["MAPI",.4,"exchange","activesync"]]),
P("a2105","A2.1.1","Name a benefit of connecting computers in a network.","Shared software licences",[
  ["Share files",30,"file sharing","sharing files","share data","sharing data"],["Share printers and hardware",15,"printers","share devices","share hardware","share resources","printer"],
  ["Communication",12,"email","messaging","communicate"],["Shared internet connection",8,"internet access","share internet"],
  ["Collaboration",6,"collaborate","work together"],["Central backups",6,"backup","backups"],["Central management and updates",5,"central management","updates","install software centrally"],
  ["Central security",2,"security"],["Log in from any computer",2,"roaming profiles","log in anywhere"],["Shared software licences",.4,"software licences","site licence","network licence","licences","licenses"]]),

/* ---------------- A2.2 Network architecture ---------------- */
P("a2201","A2.2.1","Name a network topology.","Daisy chain",[
  ["Star",35],["Bus",18],["Ring",15],["Mesh",15],["Hybrid",6],["Tree",5],["Point-to-point",2,"point to point"],["Daisy chain",.4]]),
P("a2202","A2.2.2","Name a type of server.","Time server (NTP)",[
  ["Web server",30,"web"],["File server",18,"file"],["Mail server",14,"email server","mail","email"],["Database server",10,"database"],
  ["DNS server",8,"dns"],["DHCP server",5,"dhcp"],["Proxy server",4,"proxy"],["Game server",4,"game"],["Print server",3,"print"],
  ["Application server",2,"application"],["Media / streaming server",2,"media server","streaming server"],["Time server (NTP)",.4,"ntp","time server"]]),
P("a2203","A2.2.4","Name a difference between client-server and peer-to-peer networks.","Blockchains use peer-to-peer",[
  ["Central server vs all computers equal",35,"central server","no server","central computer","all equal","equal status","server"],
  ["Security is managed centrally",12,"security","central security"],["Peer-to-peer is cheaper",10,"cheaper","cost","no expensive server"],
  ["Backups are centralised",8,"backup","backups","central backup"],["The server is a single point of failure",6,"single point of failure","server goes down"],
  ["Peer-to-peer is harder to manage",6,"management","harder to manage"],["Scalability",4,"scalable","scales"],["File sharing / torrents",4,"torrent","bittorrent","torrents"],
  ["Blockchains use peer-to-peer",.4,"blockchain","bitcoin"]]),
P("a2204","A2.2.3","Name a reason for, or a method of, segmenting a network.","Air gap",[
  ["Security",30,"more secure","isolate","contain attacks","limit spread","secure"],
  ["Performance / less congestion",25,"less traffic","congestion","faster","performance","reduce collisions","broadcast traffic"],
  ["Easier management",12,"management","organise","organize","departments"],["Separate guest network",6,"guest network","guest wifi","visitors"],
  ["Subnetting",4,"subnet","subnets"],["Fault isolation",4,"faults","isolate problems","troubleshooting"],["VLANs",3,"vlan","virtual lan"],
  ["Compliance",2,"regulations"],["Air gap",.4,"air gapped","air gapping"]]),

/* ---------------- A2.3 Data transmission ---------------- */
P("a2301","A2.3.2","Name a transmission medium.","Li-Fi",[
  ["Fibre optic",25,"fiber","fibre","optical fibre","fiber optic","fiber optics","fibre optics"],
  ["Twisted pair copper",20,"ethernet cable","cat5","cat6","twisted pair","copper","copper cable","utp","ethernet"],
  ["Wi-Fi / radio",25,"wifi","wireless","radio waves","radio"],["Coaxial cable",8,"coax","coaxial"],["Bluetooth",6],["Cellular (4G / 5G)",4,"4g","5g","mobile data","cellular"],
  ["Satellite",5],["Microwave",3],["Infrared",2,"ir"],["Li-Fi",.4,"lifi","visible light"]]),
P("a2302","A2.3.1","Name a type or part of IP addressing.","Loopback address",[
  ["IPv4",30,"ip v4","ip version 4"],["IPv6",20,"ip v6","ip version 6"],["Public IP",8,"public"],["Private IP",8,"private"],
  ["Static IP",8,"static"],["Dynamic IP",8,"dynamic"],["Subnet mask",5],["NAT",4,"network address translation"],["DHCP",4],
  ["Loopback address",.4,"loopback","localhost","127 0 0 1"]],
  [[["mac","mac address"],"A MAC address is a hardware address used inside the local network, not part of IP addressing."]]),
P("a2303","A2.3.3","Name something a data packet contains.","Fragment offset",[
  ["Payload / data",30,"data","payload","the data"],["Destination IP address",20,"destination address","destination","recipient address","destination ip"],
  ["Source IP address",15,"source address","sender address","source","source ip"],["Sequence number",10,"packet number","sequence","order number"],
  ["Checksum",8,"error check","error checking","crc"],["Header",6],["Protocol",3],["Time to live",2,"ttl","hop limit","hop count"],["Port numbers",2,"port","port number"],
  ["Fragment offset",.4,"flags","fragment"]]),
P("a2304","A2.3.4","Name a routing concept or routing protocol.","Route poisoning",[
  ["Routing table",25],["Dynamic routing",15,"dynamic"],["Static routing",15,"static"],["Hop count",8,"hops"],["Shortest path",5,"shortest route","dijkstra"],
  ["OSPF",4,"open shortest path first"],["RIP",4,"routing information protocol"],["Default route / gateway",4,"default route","default gateway"],["BGP",3,"border gateway protocol"],
  ["Route poisoning",.4]], [], HL),

/* ---------------- A2.4 Network security ---------------- */
P("a2401","A2.4.1","Name a network security threat.","Evil twin",[
  ["Virus",18,"viruses"],["Malware",15],["Phishing",15],["DDoS",10,"dos","denial of service","distributed denial of service"],["Hacking",8,"hacker","hackers"],
  ["Ransomware",8],["Trojan",5],["Worm",4],["Spyware",4],["Brute force",3,"password cracking"],["Man-in-the-middle",3,"mitm","man in the middle"],
  ["Social engineering",3],["SQL injection",2,"sql"],["Keylogger",2],["Pharming",1],["Evil twin",.4,"rogue access point"]]),
P("a2402","A2.4.2","Name a way to protect a network.","Honeypot",[
  ["Firewall",30],["Antivirus",18,"anti virus","antimalware","anti malware"],["Strong passwords",12,"passwords","password"],["Encryption",10,"encrypt"],
  ["Two-factor authentication",8,"2fa","mfa","multi factor","two factor","multi factor authentication"],["Software updates",5,"updates","patching","patches"],
  ["Backups",4,"backup"],["Access levels",3,"access rights","permissions","least privilege","user permissions"],["Staff training",3,"training","education"],
  ["VPN",3],["IDS / IPS",2,"intrusion detection","intrusion prevention","ids","ips"],["Biometrics",2,"fingerprint"],["Penetration testing",1,"pen testing","pentesting"],
  ["Honeypot",.4,"honey pot"]]),
P("a2403","A2.4.3","Name something to do with encryption.","Diffie-Hellman key exchange",[
  ["Symmetric encryption",15,"symmetric"],["Asymmetric encryption",12,"asymmetric","public key encryption"],["Public key",12],["Private key",12],
  ["Caesar cipher",8,"caesar"],["Digital certificate",6,"certificate","ssl certificate"],["AES",5],["RSA",5],["Digital signature",4,"signature"],
  ["Hashing",4,"hash","sha 256","sha256","md5"],["HTTPS / TLS",4,"https","tls","ssl"],["Diffie-Hellman key exchange",.4,"diffie hellman","key exchange"]], [], HL),
P("a2404","A2.4.1","Name a sign that a computer may have malware.","Fan running constantly",[
  ["Runs slowly",35,"slow","running slow","slower","slow performance"],["Pop-ups",15,"popups","pop ups","adverts","ads"],
  ["Crashes or freezes",10,"crashing","crashes","freezing","freezes"],["Unknown programs appear",6,"new programs","unknown apps","unknown programs"],
  ["Files missing or encrypted",5,"files missing","files encrypted","files deleted"],["Unusual network activity",4,"high data usage","network activity"],
  ["Browser homepage changed",4,"homepage changed","redirects","browser redirect"],["Antivirus switched off",2,"antivirus disabled"],
  ["Messages sent from your account",2,"spam sent","friends get messages"],["Fan running constantly",.4,"high cpu","fan noise","overheating","fan"]]),

/* ---------------- A3.1 Database fundamentals ---------------- */
P("a3101","A3.1.1","Name an advantage of a relational database.","Referential integrity",[
  ["Less data redundancy",25,"less redundancy","no duplicate data","reduces duplication","less duplication","redundancy","no redundancy"],
  ["Data integrity",15,"integrity","accuracy","accurate data"],["Data consistency",12,"consistency","consistent"],["Easy to search with SQL",10,"sql","easy to query","searching","queries"],
  ["Security and access control",8,"security","access control"],["Many users at once",6,"concurrency","multi user","many users","multiple users"],
  ["Easier updates",5,"update once","easier to update"],["Backup and recovery",3,"backup","recovery"],["Data independence",2],
  ["Referential integrity",.4]]),
P("a3102","A3.1.1","Name a term used in relational databases.","Domain",[
  ["Table / relation",20,"table","relation","tables"],["Record / row / tuple",15,"record","row","tuple","records","rows"],
  ["Field / column / attribute",15,"field","column","attribute","fields","columns"],["Primary key",15],["Foreign key",10],["Query",8,"queries"],
  ["SQL",6],["Entity",4],["Schema",2],["Index",2],["Composite key",2,"compound key","concatenated key"],["Candidate key",1],["Domain",.4,"attribute domain"]]),
P("a3103","A3.1.2","Name a limitation of relational databases.","Object-relational impedance mismatch",[
  ["Hard to scale",25,"scalability","scaling","hard to scale horizontally","scale"],["Complex to design",15,"complex","complicated","hard to design"],
  ["Poor for unstructured data",15,"unstructured data","images","videos","flexible data","unstructured"],["Fixed schema",8,"rigid","schema changes","inflexible","fixed structure"],
  ["Slow with huge data sets",8,"slow","big data","performance"],["Expensive",8,"cost","costly"],["Needs a skilled administrator",4,"dba","administrator","expertise"],
  ["Object-relational impedance mismatch",.4,"impedance mismatch","object relational mismatch"]]),

/* ---------------- A3.2 Database design ---------------- */
P("a3201","A3.2.3","Name a type of database key.","Natural key",[
  ["Primary key",40,"primary"],["Foreign key",30,"foreign"],["Composite key",8,"composite","compound key","concatenated key","compound","concatenated"],
  ["Candidate key",6,"candidate"],["Secondary / alternate key",4,"secondary","alternate key","alternate"],["Super key",2,"superkey"],["Surrogate key",2,"surrogate","artificial key"],
  ["Natural key",.4,"natural"]]),
P("a3202","A3.2.4","Name a normal form or a normalisation term.","4NF",[
  ["1NF",25,"first normal form"],["2NF",20,"second normal form"],["3NF",18,"third normal form"],["Atomic values",8,"atomic","atomic data"],
  ["Repeating groups",6,"repeating group"],["Partial dependency",6,"partial dependencies"],["Transitive dependency",6,"transitive dependencies"],
  ["Functional dependency",4,"functional dependencies"],["Denormalisation",3,"denormalization"],["BCNF",1,"boyce codd"],["4NF",.4,"fourth normal form"]],
  [[["atomicity","durability","isolation"],"That's an ACID property of transactions, not normalisation."]]),
P("a3203","A3.2.1","Name a relationship type (cardinality) in an ERD.","Recursive relationship",[
  ["One-to-many",40,"one to many","1 to many","1 m","1 n","one to many relationship"],["Many-to-many",25,"many to many","m n","m m"],
  ["One-to-one",25,"one to one","1 1","1 to 1"],["Zero-to-many (optional)",3,"optional","zero or more","0 to many","zero to many"],
  ["Recursive relationship",.4,"recursive","self referencing","unary"]]),
P("a3204","A3.2.2","Name a database data type.","JSON",[
  ["Integer",25,"int"],["Text / VARCHAR",20,"text","string","varchar","char"],["Boolean",12,"bool","yes no"],["Date / time",12,"date","time","datetime","timestamp"],
  ["Float / decimal",10,"float","real","decimal","double"],["Currency",4,"money"],["Auto-number",3,"autonumber","auto increment","serial"],["BLOB",1.5,"binary large object"],
  ["JSON",.4,"jsonb"]]),

/* ---------------- A3.3 Database programming ---------------- */
P("a3301","A3.3.1","Name an SQL keyword or command.","UNION",[
  ["SELECT",30],["FROM",12],["WHERE",12],["INSERT",8,"insert into"],["UPDATE",8],["DELETE",7],["CREATE TABLE",5,"create"],["ORDER BY",5,"order"],
  ["JOIN",4,"inner join"],["GROUP BY",3,"group"],["DROP",2],["ALTER",1.5],["HAVING",1],["UNION",.4]]),
P("a3302","A3.3.1","Name an SQL aggregate function.","STRING_AGG",[
  ["COUNT",30],["SUM",25],["AVG",20,"average"],["MAX",12,"maximum"],["MIN",10,"minimum"],["STRING_AGG",.4,"group concat","group_concat","string agg"]]),
P("a3303","A3.3.2","Name a property of a database transaction, or a way to keep data safe during one.","Two-phase commit",[
  ["Atomicity",20,"atomic"],["Consistency",15],["Isolation",12],["Durability",12],["Commit",6],["Rollback",6,"roll back"],
  ["Locking",4,"record locking","locks","lock"],["Backups",3,"backup"],["Transaction log",2,"log","logging"],["Two-phase commit",.4,"2pc","two phase commit"]]),
P("a3304","A3.3.1","Name a way to combine data from more than one table in SQL.","SELF JOIN",[
  ["INNER JOIN",35,"inner","join"],["LEFT JOIN",15,"left outer join","left"],["RIGHT JOIN",10,"right outer join","right"],["FULL OUTER JOIN",6,"full join","outer join"],
  ["Foreign key match in ON / WHERE",5,"foreign key","on clause"],["UNION",3],["Subquery",2,"nested query","sub query"],["CROSS JOIN",2,"cross"],["SELF JOIN",.4,"self"]]),

/* ---------------- A3.4 Alternative databases and data warehouses (HL) ---------------- */
P("a3401","A3.4.1","Name a type of NoSQL database.","Time-series",[
  ["Document",25,"document store","mongodb","document database"],["Key-value",20,"key value","key value store","redis"],["Graph",15,"neo4j","graph database"],
  ["Wide-column",10,"column","column family","cassandra","column store","wide column"],["Time-series",.4,"time series","influxdb"]], [], HL),
P("a3402","A3.4.2","Name a term about data warehouses or data mining.","Star schema",[
  ["Data warehouse",15],["Data mining",15],["Big data",10],["OLAP",8,"online analytical processing"],["ETL",8,"extract transform load"],
  ["Finding patterns and trends",6,"patterns","trends","pattern","trend analysis"],["Historical data",5,"historical"],["Data lake",5],
  ["Business intelligence dashboards",4,"business intelligence","bi","dashboards","dashboard"],["Data mart",3],["Star schema",.4,"snowflake schema","fact table"]], [], HL),
P("a3403","A3.4.3","Name a feature of a distributed database.","CAP theorem",[
  ["Data stored in many locations",30,"multiple locations","multiple sites","different locations","spread across servers","many servers"],
  ["Replication",15,"replicated","copies","replicas"],["Fault tolerance",12,"redundancy","reliability","availability","still works if one fails"],
  ["Faster local access",10,"faster access","lower latency","local access"],["Scalable",8,"scalability"],["Sharding / fragmentation",6,"sharding","shards","partitioning","fragmentation"],
  ["Harder to keep consistent",5,"consistency problems","synchronisation","synchronization","consistency"],["More complex and costly",4,"complex","cost"],
  ["CAP theorem",.4,"cap"]], [], HL),

/* ---------------- A4.1 Machine learning fundamentals ---------------- */
P("a4101","A4.1.1","Name a type of machine learning.","Self-supervised learning",[
  ["Supervised learning",35,"supervised"],["Unsupervised learning",25,"unsupervised"],["Reinforcement learning",20,"reinforcement"],
  ["Deep learning",8,"deep"],["Semi-supervised learning",3,"semi supervised"],["Transfer learning",3,"transfer"],["Self-supervised learning",.4,"self supervised"]]),
P("a4102","A4.1.1","Name a real-world use of machine learning.","Protein structure prediction",[
  ["Recommendations",20,"netflix","youtube recommendations","recommendation systems","recommendations","tiktok","for you page"],
  ["Chatbots / language models",18,"chatgpt","chatbot","chatbots","claude","gemini","ai assistant","llm"],["Self-driving cars",12,"autonomous cars","tesla","self driving"],
  ["Face recognition",12,"facial recognition","face id"],["Spam filters",8,"spam filter","spam detection"],["Voice assistants",8,"siri","alexa","speech recognition"],
  ["Medical diagnosis",6,"healthcare","cancer detection","x ray","diagnosis"],["Fraud detection",5,"fraud"],["Translation",4,"google translate"],
  ["Image generation",4,"ai art","midjourney","dall e","image generators"],["Protein structure prediction",.4,"alphafold","protein folding"]]),
P("a4103","A4.1.2","Name hardware or infrastructure used to train machine learning models.","FPGA / ASIC",[
  ["GPUs",35,"gpu","graphics card","nvidia","graphics cards"],["Cloud computing",12,"cloud","aws","azure","google cloud"],["TPUs",10,"tpu","tensor processing unit"],
  ["CPUs",10,"cpu"],["Lots of RAM",6,"ram","memory"],["Data centres",6,"data center","data centre","server farm","servers"],["Fast storage (SSDs)",3,"ssd","ssds","storage"],
  ["Supercomputers",3,"supercomputer"],["FPGA / ASIC",.4,"fpga","asic","npu"]]),

/* ---------------- A4.2 Data preprocessing (HL) ---------------- */
P("a4201","A4.2.1","Name a data cleaning or preprocessing step.","Data augmentation",[
  ["Remove duplicates",20,"duplicates","deduplication","removing duplicates"],["Handle missing data",20,"missing values","fill missing","imputation","remove nulls","missing data"],
  ["Remove outliers",12,"outliers"],["Normalise / scale features",12,"normalization","normalisation","scaling","standardisation","standardization","feature scaling"],
  ["Fix incorrect data",8,"errors","typos","incorrect data","fix errors"],["Split into training and test sets",6,"train test split","splitting data","split data"],
  ["Feature selection",6],["Encode categories",4,"one hot encoding","label encoding","encoding"],["Dimensionality reduction",3,"pca","principal component analysis"],
  ["Data augmentation",.4,"augmentation"]], [], HL),
P("a4202","A4.2.1","Name a problem with training data.","Data leakage",[
  ["Bias",30,"biased","biased data"],["Not enough data",15,"too little data","small dataset","insufficient data"],["Missing values",10,"missing data"],
  ["Noise or mislabelled data",10,"noisy","noise","incorrect labels","mislabelled","mislabeled","errors"],["Outliers",6],["Imbalanced classes",6,"imbalanced","class imbalance","unbalanced"],
  ["Out of date",4,"outdated","old data"],["Privacy issues",4,"personal data","privacy"],["Irrelevant features",3,"irrelevant data"],["Data leakage",.4,"leakage"]], [], HL),

/* ---------------- A4.3 Machine learning approaches ---------------- */
P("a4301","A4.3.1","Name a machine learning algorithm or model.","Gradient boosting",[
  ["Neural network",25,"ann","nn","neural networks","artificial neural network"],["Decision tree",12,"decision trees"],["Linear regression",12,"regression"],
  ["K-nearest neighbours",8,"knn","k nearest neighbors","k nearest neighbours"],["K-means clustering",8,"k means","clustering"],["CNN",6,"convolutional neural network"],
  ["Random forest",4],["Genetic algorithm",4,"genetic algorithms"],["Support vector machine",3,"svm"],["Logistic regression",3],["Transformer",2,"transformers","llm","gpt"],
  ["Naive Bayes",2],["Q-learning",1,"q learning"],["Apriori / association rules",1,"apriori","association rules"],["Gradient boosting",.4,"xgboost","gradient boosted trees"]]),
P("a4302","A4.3.1","Name a term used when training a model.","Cross-validation",[
  ["Training data",20,"training set","training dataset"],["Overfitting",12,"overfit"],["Test data",12,"test set","testing data"],["Accuracy",8],
  ["Underfitting",6,"underfit"],["Epoch",5,"epochs"],["Weights",5,"weight"],["Labels",4,"labelled data","label","labeled data"],["Learning rate",4],
  ["Loss function",4,"loss","cost function"],["Hyperparameters",4,"hyperparameter","hyperparameter tuning"],["Validation data",4,"validation set"],
  ["Backpropagation",2,"back propagation"],["Cross-validation",.4,"k fold","cross validation"]]),
P("a4303","A4.3.1","Name a task suited to unsupervised learning.","Gene expression analysis",[
  ["Clustering",35,"grouping","group similar","clusters"],["Customer segmentation",15,"market segmentation","grouping customers"],
  ["Anomaly detection",10,"outlier detection","anomalies","fraud detection"],["Finding patterns",8,"patterns","pattern finding"],["Recommendations",8,"recommendation systems"],
  ["Market basket analysis",6,"association rules","shopping basket","market basket"],["Dimensionality reduction",4,"pca"],["Grouping documents",3,"topic modelling","document clustering"],
  ["Gene expression analysis",.4,"genetics","genes","dna"]],
  [[["spam filter","spam detection","image classification","predicting house prices","classification","regression"],"That needs labelled examples, so it's supervised learning."]]),
P("a4304","A4.3.2","Name a part of a neural network.","Dropout layer",[
  ["Neuron / node",25,"neuron","neurons","node","nodes","perceptron"],["Input layer",15],["Hidden layer",15,"hidden layers"],["Output layer",12],
  ["Weights",12,"weight"],["Bias",6,"biases"],["Activation function",6,"relu","sigmoid","activation"],["Layers",5,"layer"],["Connections",3,"edges","synapses"],
  ["Dropout layer",.4,"dropout"]]),

/* ---------------- A4.4 Ethical considerations ---------------- */
P("a4401","A4.4.1","Name an ethical issue with AI or machine learning.","Digital divide",[
  ["Bias / discrimination",30,"bias","biased","discrimination","unfair"],["Privacy",18,"data privacy","personal data","surveillance"],
  ["Job losses",15,"jobs","unemployment","replacing workers","automation"],["Misinformation / deepfakes",10,"deepfakes","deepfake","fake news","misinformation"],
  ["Accountability",8,"responsibility","who is to blame","liability"],["Lack of transparency",6,"black box","explainability","transparency"],
  ["Environmental impact",4,"energy use","carbon footprint","electricity","water use"],["Copyright",4,"stealing art","intellectual property"],
  ["Autonomous weapons",2,"killer robots","weapons"],["Consent",2],["Digital divide",.4,"inequality of access"]]),
P("a4402","A4.4.1","Name a way to make an AI system fairer or more trustworthy.","Model cards",[
  ["Diverse, representative training data",30,"diverse data","representative data","unbiased data","more data","diverse training data"],
  ["Human oversight",15,"human in the loop","humans checking","human review"],["Test for bias",12,"bias testing","audits","audit","auditing"],
  ["Explainable AI",8,"explainability","transparency","explain decisions","xai"],["Regulation",8,"laws","regulations","eu ai act","government rules"],
  ["Protect privacy",5,"anonymise data","anonymize data","anonymisation","data protection","gdpr"],["Clear accountability",4,"accountability"],
  ["Ethics guidelines",4,"ethics committee","guidelines","code of ethics"],["Diverse development teams",3,"diverse teams"],["Model cards",.4,"datasheets for datasets","documentation"]]),

/* ---------------- B1.1 Approaches to computational thinking ---------------- */
P("b1101","B1.1.1","Name a concept of computational thinking.","Generalisation",[
  ["Decomposition",30,"decompose","breaking down","break the problem down","breaking problems down"],["Abstraction",25,"abstract"],
  ["Pattern recognition",20,"patterns","pattern"],["Algorithmic design",15,"algorithms","algorithm design","algorithmic thinking","algorithm"],
  ["Logical reasoning",3,"logic","logical thinking"],["Evaluation",3,"evaluate"],["Generalisation",.4,"generalization"]]),
P("b1102","B1.1.2","Name a way to plan or represent an algorithm.","UML activity diagram",[
  ["Flowchart",35,"flow chart","flowcharts"],["Pseudocode",30,"pseudo code"],["Trace table",8],["Code",6,"python","java","program"],
  ["Structure chart",5,"structure diagram","hierarchy chart"],["Written steps",5,"written description","list of steps","natural language","english"],
  ["Decision table",2],["UML activity diagram",.4,"activity diagram","uml"]]),
P("b1103","B1.1.2","Name a flowchart symbol.","Off-page connector",[
  ["Decision (diamond)",25,"decision","diamond"],["Start / end (terminator)",25,"start","end","oval","terminal","terminator","rounded rectangle","start end"],
  ["Process (rectangle)",20,"process","rectangle","process box"],["Input / output (parallelogram)",15,"input","output","parallelogram","input output"],
  ["Arrow / flow line",8,"arrow","flow line","line","arrows"],["Subroutine (predefined process)",3,"subroutine","predefined process","function"],
  ["Connector",2,"circle","on page connector"],["Off-page connector",.4,"off page connector","off page"]]),
P("b1104","B1.1.3","Name something a trace table helps you find or record.","Off-by-one errors",[
  ["Variable values",35,"values of variables","variables","value changes","variable"],["Logic errors",15,"errors","bugs","logic error","logical errors"],
  ["Output",12,"outputs","what is printed"],["Dry-running an algorithm",8,"dry run","dry running"],["Loop iterations",8,"iterations","how many times a loop runs","loops"],
  ["Conditions (true / false)",5,"conditions","condition values"],["Infinite loops",3,"infinite loop"],["Off-by-one errors",.4,"off by one","off by one error"]]),

/* ---------------- B2.1 Programming fundamentals ---------------- */
P("b2101","B2.1.1","Name a basic data type.","Byte",[
  ["Integer",30,"int"],["String",25,"str","text"],["Boolean",15,"bool"],["Float / real",15,"float","real","double","decimal"],["Character",8,"char"],
  ["Long",2],["Short",1],["Byte",.4]]),
P("b2102","B2.1.2","Name a type of operator used in programming.","Bitwise",[
  ["Arithmetic",25,"maths","math","plus","add"],["Comparison / relational",20,"relational","comparison","greater than","less than","equal to"],
  ["Logical / Boolean",18,"logical","boolean","and","or","not","boolean operators"],["Assignment",12,"equals","assign"],["Modulus",5,"mod","remainder","modulo"],
  ["Integer division",4,"div","floor division"],["Concatenation",4,"concatenate","concat"],["Exponent",2,"power","exponentiation"],["Increment",2,"increment operator"],
  ["Bitwise",.4,"bit shift","bitwise operators"]]),
P("b2103","B2.1.3","Name a string operation or method.","String formatting",[
  ["Length",25,"len","length"],["Concatenation",15,"concatenate","join strings","add strings","concat"],["Substring / slicing",12,"slice","slicing","substr","substring"],
  ["Upper / lower case",12,"upper","lower","uppercase","lowercase","touppercase","tolowercase"],["Find / index",8,"index","indexof","find","search"],
  ["Replace",6],["Split",6],["Trim / strip",4,"trim","strip"],["Reverse",3],["Compare / equals",3,"equals","compare"],["charAt",2,"char at","get character"],
  ["String formatting",.4,"format","f string","f strings","string format"]]),
P("b2104","B2.1.4","Name a type of programming error, or a way to find errors.","Rubber duck debugging",[
  ["Syntax error",25,"syntax"],["Logic error",18,"logical error","logic"],["Runtime error",15,"run time error","runtime","crash","exception"],
  ["Debugger",6,"debugging"],["Breakpoints",5,"breakpoint"],["Trace table",5],["Print statements",4,"print debugging","printing values"],
  ["Testing",4,"test data","unit testing","unit tests"],["Exception handling",3,"try catch","try except"],["Stepping through code",2,"stepping","step through"],
  ["Rubber duck debugging",.4,"rubber duck"]]),
P("b2105","B2.1.1","Name a reason to use a constant instead of a variable.","Avoids magic numbers",[
  ["Value can't change by accident",35,"cannot change","can't be changed","prevents changes","stays the same","fixed value","can't change"],
  ["Update it in one place",20,"change in one place","easy to update","update once","one place"],["More readable",15,"readability","meaningful name","easier to read","clear"],
  ["Fewer errors",8,"less errors","avoids mistakes","bugs","fewer bugs"],["Self-documenting code",3,"self documenting"],["Compiler optimisation",2,"optimisation","optimization"],
  ["Avoids magic numbers",.4,"magic numbers","magic number"]]),

/* ---------------- B2.2 Data structures ---------------- */
P("b2201","B2.2.1","Name a data structure.","Heap",[
  ["Array",25,"arrays"],["List",15,"arraylist","array list","python list","lists"],["Stack",12],["Queue",12],["Dictionary / hash map",10,"dict","dictionary","hashmap","hash map","hash table","map"],
  ["2D array",5,"two dimensional array","2d list","matrix","grid"],["Tree",4,"binary tree","bst"],["Linked list",4],["Tuple",3],["Set",3],["Graph",2],
  ["Record / struct",2,"record","struct"],["Heap",.4,"priority queue"]]),
P("b2202","B2.2.3","Name a stack or queue operation.","Overflow / underflow check",[
  ["Push",25],["Pop",25],["Enqueue",15,"add to queue"],["Dequeue",15,"remove from queue"],["Peek / front",8,"peek","top","front"],
  ["isEmpty",5,"is empty","empty"],["isFull",3,"is full","full"],["Size",2,"length"],["Overflow / underflow check",.4,"overflow","underflow"]]),
P("b2203","B2.2.3","Name a real-world use of a stack or a queue.","Evaluating postfix expressions",[
  ["Undo",25,"undo button","ctrl z"],["Print queue",15,"printer queue","printing"],["Browser back button",12,"back button","browser history"],
  ["Waiting line / customer queue",8,"customer queue","call centre","call center","ticket line","waiting line","queue at a shop"],
  ["Call stack / recursion",6,"function calls","call stack","recursion"],["CPU scheduling",6,"process scheduling","task scheduling","os scheduling"],
  ["Playlist",4,"music queue"],["Keyboard buffer",3,"buffer"],["Bracket matching",2,"balanced brackets","parentheses checking"],
  ["Evaluating postfix expressions",.4,"reverse polish","postfix","rpn"]]),
P("b2204","B2.2.2","Name a difference between a static and a dynamic data structure.","Arrays are static, linked lists are dynamic",[
  ["Fixed size vs size can change",45,"fixed size","size can change","grow","shrink","resizable","size","fixed"],
  ["Memory allocated at compile time vs run time",15,"compile time","run time","runtime","memory allocation","allocated in advance"],
  ["Static can waste memory",10,"wastes memory","unused space","waste memory"],["Static is faster to access",8,"faster","direct access","index"],
  ["Dynamic needs extra memory for pointers",5,"pointers","overhead","extra memory"],["Dynamic can run out of heap memory",3,"memory leak","heap"],
  ["Arrays are static, linked lists are dynamic",.4,"linked list","array vs linked list"]]),

/* ---------------- B2.3 Programming constructs ---------------- */
P("b2301","B2.3.1","Name a programming construct.","Post-condition loop",[
  ["Selection",25,"if","if statement","if else","conditional","conditionals"],["Iteration",25,"loop","loops","for loop","while loop","repetition"],["Sequence",20],
  ["Functions / procedures",10,"function","procedure","subroutine","method"],["Switch / case",4,"switch","case","match"],["Recursion",3],["Exception handling",2,"try except","try catch"],
  ["Post-condition loop",.4,"do while","repeat until","do while loop","post condition loop"]]),
P("b2302","B2.3.3","Name a type of loop.","Sentinel-controlled loop",[
  ["For loop",30,"for","count controlled","counter controlled"],["While loop",30,"while","condition controlled"],["Do-while loop",10,"do while","repeat until","post condition"],
  ["For-each loop",8,"for each","foreach","for in","enhanced for"],["Nested loop",6,"nested"],["Infinite loop",3,"infinite","while true"],
  ["Sentinel-controlled loop",.4,"sentinel","sentinel loop"]]),
P("b2303","B2.3.4","Name a benefit of using functions or subroutines.","Abstraction",[
  ["Reuse code",35,"reusable","reuse","code reuse","avoid repetition","dry","less repetition"],["Easier to read",15,"readability","readable"],
  ["Easier to test and debug",12,"testing","debugging","test separately"],["Modular design",10,"modular","modularity","break into parts","decomposition"],
  ["Easier maintenance",6,"maintain","maintenance","update in one place"],["Teamwork",6,"team","different programmers","work in parallel"],
  ["Shorter programs",5,"shorter code","less code"],["Libraries",2,"library","share code"],["Abstraction",.4,"hide details","black box"]]),
P("b2304","B2.3.4","Name a term about variables and functions.","Variable lifetime",[
  ["Parameter / argument",25,"parameter","parameters","argument","arguments"],["Return value",20,"return"],["Local variable",18,"local"],["Global variable",15,"global"],
  ["Scope",8],["Pass by value",4,"by value"],["Pass by reference",4,"by reference"],["Default parameter",2,"default argument"],["Variable lifetime",.4,"lifetime"]]),

/* ---------------- B2.4 Programming algorithms ---------------- */
P("b2401","B2.4.2","Name a searching or sorting algorithm.","Bogosort",[
  ["Bubble sort",25,"bubble"],["Binary search",20,"binary"],["Linear search",15,"linear","sequential search"],["Selection sort",8,"selection"],
  ["Merge sort",8,"merge"],["Insertion sort",8,"insertion"],["Quicksort",6,"quick sort","quick"],["Heap sort",1.5,"heapsort"],["Radix sort",1,"radix"],
  ["Bogosort",.4,"bogo sort"]]),
P("b2402","B2.4.1","Name a Big O time complexity.","O(n³) cubic",[
  ["O(n) linear",25,"linear","on","o n","big o n"],["O(n²) quadratic",20,"quadratic","n squared","on2","o n2","on 2","n2"],
  ["O(1) constant",15,"constant","o1","o 1"],["O(log n) logarithmic",15,"logarithmic","ologn","o log n","log n","logn"],
  ["O(n log n)",10,"nlogn","n log n","onlogn","linearithmic"],["O(2ⁿ) exponential",3,"exponential","o2n","2 n","o 2 n"],["O(n!) factorial",1,"factorial","n factorial"],
  ["O(n³) cubic",.4,"cubic","n cubed","on3","o n3"]]),
P("b2403","B2.4.2","Name a condition or step of binary search.","Needs random access",[
  ["The list must be sorted",45,"sorted","sorted data","sorted list","list must be sorted","ordered","in order"],["Find the middle item",20,"midpoint","middle item","mid","middle"],
  ["Discard half the list",15,"halve","half","divide in half","split in half","eliminate half"],["Compare with the target",8,"compare","comparison"],
  ["Update low and high pointers",5,"low","high","pointers","upper bound","lower bound"],["Repeat until found or empty",4,"repeat","loop until found"],
  ["Needs random access",.4,"random access","direct access","index access"]]),
P("b2404","B2.4.4","Name a feature of recursion.","Tail recursion",[
  ["Base case",35,"base condition","stopping condition"],["Function calls itself",30,"calls itself","self calling"],["Recursive case",10,"recursive step"],
  ["Uses the call stack",8,"stack","call stack"],["Risk of stack overflow",6,"stack overflow"],["Uses more memory",4,"memory"],
  ["Suits trees / divide and conquer",3,"trees","divide and conquer"],["Tail recursion",.4,"tail call"]], [], HL),

/* ---------------- B2.5 File processing ---------------- */
P("b2501","B2.5.1","Name a file operation in a program.","Flush",[
  ["Open",25],["Read",25],["Write",20],["Close",15],["Append",10],["Create",3,"create file"],["Delete",2,"remove"],["Seek",1],["Flush",.4]]),
P("b2502","B2.5.1","Name a file mode, or a type of file a program can process.","Exclusive create mode",[
  ["Read mode",20,"r","read"],["Write mode",18,"w","write"],["Append mode",15,"a","append"],["Text file",15,"txt","text"],["CSV file",10,"csv","comma separated values"],
  ["Binary file",5,"binary","rb","wb"],["JSON file",4,"json"],["Read/write mode",3,"read and write mode","read write"],["Exclusive create mode",.4,"exclusive","x mode"]]),

/* ---------------- B3.1 OOP for a single class ---------------- */
P("b3101","B3.1.1","Name a feature of a class or an object.","Destructor",[
  ["Attributes",25,"attribute","properties","fields","instance variables"],["Methods",25,"method","functions","behaviours","behaviors"],["Constructor",15],
  ["Instances / objects",8,"instance","object","instantiation"],["Encapsulation",8],["Getters and setters",6,"getter","setter","accessor","mutator"],
  ["Access modifiers",5,"private","public","protected"],["Static members",3,"static","class variable","static method"],["Destructor",.4,"finalizer"]]),
P("b3102","B3.1.4","Name a benefit of encapsulation.","Reduces coupling",[
  ["Protects data",35,"data hiding","hides data","security","protection","hide data"],["Controlled access through methods",15,"getters","setters","controlled access"],
  ["Prevents invalid values",10,"validation","invalid data"],["Internals can change safely",8,"maintenance","change implementation"],["Fewer bugs",5],
  ["Modularity",4,"modular"],["Simpler interface",3,"abstraction","simpler to use"],["Reduces coupling",.4,"loose coupling","coupling"]]),
P("b3103","B3.1.1","Name a difference between a class and an object.","Static members are shared",[
  ["Blueprint vs instance",50,"blueprint","template","instance","plan"],["One class, many objects",15,"many objects","multiple objects","one class"],
  ["Objects hold actual values",12,"values","state","data","actual data"],["Objects take up memory at run time",6,"memory","allocated memory"],
  ["Objects are created with a constructor",5,"new","instantiation","constructor"],["Static members are shared",.4,"static"]]),
P("b3104","B3.1.3","Name an access modifier.","Package-private",[
  ["Private",40],["Public",35],["Protected",15],["Package-private",.4,"default","package private","package"]]),

/* ---------------- B3.2 OOP for multiple classes (HL) ---------------- */
P("b3201","B3.2.1","Name a principle or relationship in object-oriented programming.","Dependency injection",[
  ["Inheritance",30],["Polymorphism",20],["Encapsulation",18],["Abstraction",15],["Composition",5,"has a"],["Aggregation",4],["Association",2],["Interfaces",2,"interface"],
  ["Dependency injection",.4]], [], HL),
P("b3202","B3.2.6","Name a design pattern.","Flyweight",[
  ["Singleton",25],["Factory",20,"factory method"],["Observer",15],["MVC",10,"model view controller"],["Strategy",6],["Decorator",5],["Adapter",5],
  ["Iterator",4],["Builder",3],["Facade",2],["Prototype",1],["Flyweight",.4]], [], HL),
P("b3203","B3.2.3","Name a type of polymorphism, or a term linked to it.","Generics",[
  ["Method overriding",30,"overriding","override"],["Method overloading",25,"overloading","overload"],
  ["Dynamic binding",6,"late binding","runtime polymorphism","dynamic dispatch"],["Compile-time polymorphism",6,"compile time polymorphism","static polymorphism"],
  ["Abstract methods",6,"abstract method","abstract class"],["Interfaces",6,"interface"],["super",3],["Generics",.4,"parametric polymorphism"]], [], HL),
P("b3204","B3.2.2","Name a keyword or term used with inheritance.","Multiple inheritance",[
  ["extends",25,"extend"],["Superclass",15,"parent class","base class","super class","parent"],["Subclass",15,"child class","derived class","sub class","child"],
  ["super",12],["Override",10,"overriding"],["Is-a relationship",5,"is a","inherits"],["Abstract",5],["Protected",3],["Final",2,"sealed"],["Multiple inheritance",.4]], [], HL),

/* ---------------- B4.1 Abstract data types (HL) ---------------- */
P("b4101","B4.1.1","Name an abstract data type.","Deque",[
  ["Stack",22],["Queue",22],["Linked list",15],["Binary search tree",10,"bst","binary tree","tree"],["Hash table",8,"hash map","dictionary","map","hashmap"],
  ["Set",6],["List",5],["Graph",4],["Priority queue",2],["Deque",.4,"double ended queue"]], [], HL),
P("b4102","B4.1.2","Name an operation on a linked list.","Detect a cycle",[
  ["Insert",25,"add","insertion","insert node"],["Delete",20,"remove","deletion","delete node"],["Traverse",15,"traversal","iterate"],["Search",15,"find"],
  ["Insert at head",4,"insert at front","add first","prepend"],["Insert at tail",4,"append","add last"],["Get size",3,"length","size","count"],["Reverse",2],
  ["Detect a cycle",.4,"cycle detection","floyd"]], [], HL),
P("b4103","B4.1.3","Name a way to traverse a binary tree.","Morris traversal",[
  ["In-order",30,"inorder","in order"],["Pre-order",25,"preorder","pre order"],["Post-order",25,"postorder","post order"],
  ["Breadth-first / level order",6,"bfs","level order","breadth first"],["Depth-first",6,"dfs","depth first"],["Morris traversal",.4,"morris"]], [], HL),
];

/* ---------------- world: a virus sinking into a computer ---------------- */
const BANDS = [
  {name:"Outside the case", zone:"The case",          from:0,  to:40,  hue:205, bg:["#1c252c","#141b21"]},
  {name:"Motherboard",      zone:"The motherboard",   from:40, to:100, hue:155, bg:["#082a1e","#061c15"]},
  {name:"RAM",              zone:"Main memory · RAM", from:100,to:170, hue:180, bg:["#06232b","#04171d"]},
  {name:"System buses",     zone:"The system buses",  from:170,to:250, hue:45,  bg:["#17150a","#100e07"]},
  {name:"CPU",              zone:"The processor",     from:250,to:320, hue:218, bg:["#0b1324","#090e1c"]},
  {name:"Cache",            zone:"Cache",             from:320,to:390, hue:270, bg:["#150b26","#0f081c"]},
  {name:"Control Unit",     zone:"The control unit",  from:390,to:460, hue:322, bg:["#1f0a1c","#160714"]},
  {name:"ALU",              zone:"Arithmetic logic unit", from:460,to:530, hue:18, bg:["#230f08","#190a05"]},
  {name:"MAR & MDR",        zone:"Memory registers",  from:530,to:600, hue:46,  bg:["#1e1906","#151104"]},
  {name:"The core",         zone:"PC · IR · AC — the core", from:600,to:760, hue:350, bg:["#22070d","#0c0204"]},
];
const FACTS = [
  [-38,"packets stream in from every corner of the internet"],[-20,"your virus is hiding inside a download"],
  [24,"most malware never gets past the case"],[34,"USB 2.0 moves up to 480 Mbit/s"],
  [55,"every component plugs into the motherboard"],[82,"copper traces carry signals between chips"],
  [112,"RAM is volatile: it forgets everything at power-off"],[138,"programs are loaded here from secondary storage"],[160,"every instruction is fetched from RAM"],
  [190,"address bus: one-way, CPU → memory"],[210,"data bus: two-way, data and instructions"],[232,"control bus: read, write and clock signals"],
  [268,"single-core, multi-core, or helped by a co-processor"],[298,"3 GHz = 3 billion clock ticks every second"],
  [338,"L1 cache answers in about one nanosecond"],[368,"cache keeps recently used data next to the cores"],
  [408,"every instruction is decoded here"],[440,"control signals tell each part what to do next"],
  [478,"add · subtract · compare · AND · OR · NOT"],[510,"results are written to the accumulator"],
  [548,"MAR → address bus. MDR ↔ data bus."],[578,"the MDR holds the data fetched from memory"],
  [622,"PC: the address of the next instruction"],[652,"IR: the instruction being decoded"],[682,"AC: the result of the last calculation"],[730,"nothing is deeper than this"],
];
function wallSVG(i, H, side){
  const r = srand(97 + i*13 + (side==="r"?5:0)); const hue = BANDS[i].hue; let s="";
  const rep = (step, fn) => { for (let y=20; y<H-20; y+=step) fn(y); };
  switch(i){
    case 0: s+=`<rect width="120" height="${H}" fill="#27323a"/><rect x="${side==="l"?104:12}" width="4" height="${H}" fill="#3c4952"/>`;
      rep(170, y=>{ for(let k=0;k<7;k++) s+=`<rect x="18" y="${y+k*14}" width="76" height="6" rx="3" fill="#10161a"/>`; s+=`<circle cx="60" cy="${y+128}" r="5" fill="#5a6872"/><path d="M56 ${y+128}h8" stroke="#2a343b" stroke-width="2"/>`; }); break;
    case 1: for(let k=0;k<6;k++){ let x=8+k*19, y=0, d=`M${x} 0`; while(y<H){ y+=50+r()*90; d+=` V${f1(y)}`; if(r()<.55){ const nx=Math.max(6,Math.min(114,x+(r()<.5?-16:16))); d+=` L${nx} ${f1(y+16)}`; x=nx; y+=16; } }
        s+=`<path d="${d}" fill="none" stroke="hsl(${hue} 60% 32%)" stroke-width="2"/>`; }
      rep(240, y=>{ s+=`<circle cx="${f1(30+r()*60)}" cy="${y+60}" r="13" fill="#1d2b31" stroke="#9fc2cc" stroke-width="2"/><rect x="${f1(20+r()*50)}" y="${y+130}" width="44" height="34" rx="3" fill="#0d1418" stroke="hsl(${hue} 50% 40%)"/><circle cx="${f1(10+r()*100)}" cy="${y+200}" r="3.5" fill="#c9a640"/>`; }); break;
    case 2: s+=`<rect x="22" y="0" width="62" height="${H}" fill="hsl(${hue} 45% 17%)" stroke="hsl(${hue} 55% 38%)"/>`;
      rep(74, y=>{ s+=`<rect x="30" y="${y}" width="46" height="54" rx="2" fill="#090e11"/>`; });
      for(let y=4;y<H;y+=9) s+=`<rect x="86" y="${y}" width="11" height="5" fill="#c9a640"/>`; break;
    case 3: { const cols=["#f5d042","#5ad1ff","#ff7ab8"]; for(let k=0;k<6;k++){ const x=12+k*18, c=cols[Math.floor(k/2)];
        s+=`<line x1="${x}" x2="${x}" y1="0" y2="${H}" stroke="${c}" stroke-opacity=".2" stroke-width="2.5"/><line x1="${x}" x2="${x}" y1="0" y2="${H}" stroke="${c}" stroke-width="2.5" class="flow ${k===3?"rev":""} ${k>=4?"slow":""}" style="animation-delay:${-k*.25}s"/>`; } } break;
    case 4: rep(130, y=>{ for(let c=0;c<2;c++) s+=`<rect x="${10+c*54}" y="${y}" width="46" height="46" rx="4" fill="hsl(${hue} 40% 15%)" stroke="hsl(${hue} 65% 52%)"/><rect x="${18+c*54}" y="${y+8}" width="30" height="30" fill="none" stroke="hsl(${hue} 65% 52% / .4)"/>`; });
      for(let y=0;y<H;y+=40) s+=`<path d="M0 ${y}h120" stroke="hsl(${hue} 50% 40% / .18)"/>`; break;
    case 5: for(let y=8;y<H-8;y+=12) for(let x=8;x<114;x+=12){ const on=r()<.2; s+=`<rect x="${x}" y="${y}" width="9" height="9" rx="1.5" fill="${on?`hsl(${hue} 85% 64%)`:`hsl(${hue} 30% 17%)`}" ${on&&r()<.45?`class="blink" style="animation-delay:${f1(r()*1.7)}s"`:""}/>`; } break;
    case 6: rep(190, y=>{ s+=`<rect x="14" y="${y}" width="64" height="40" rx="5" fill="hsl(${hue} 40% 15%)" stroke="hsl(${hue} 75% 62%)" stroke-width="1.5"/><path d="M78 ${y+20} C98 ${y+20} 96 ${y+70} 112 ${y+80}M46 ${y+40} V${y+110} H112" fill="none" stroke="hsl(${hue} 75% 62%)" stroke-width="1.6" class="flow slow"/>`; });
      { let d=`M104 0`; for(let y=0;y<H;y+=24) d+=` V${y+12} H92 V${y+24} H104`; s+=`<path d="${d}" fill="none" stroke="#5ad1ff" stroke-width="1.6" opacity=".8"/>`; } break;
    case 7: rep(150, (y)=>{ const k=Math.floor(y/150)%2; const x=22;
        if(k===0) s+=`<path d="M${x} ${y} h26 a24 24 0 0 1 0 48 h-26 z" fill="hsl(${hue} 50% 16%)" stroke="hsl(${hue} 85% 62%)" stroke-width="2"/>`;
        else s+=`<path d="M${x} ${y} q34 0 52 24 q-18 24 -52 24 q14 -24 0 -48 z" fill="hsl(${hue} 50% 16%)" stroke="hsl(${hue} 85% 62%)" stroke-width="2"/>`;
        s+=`<path d="M0 ${y+12}h${x+6}M0 ${y+36}h${x+6}M${x+50} ${y+24}h${70-x}" stroke="hsl(${hue} 85% 62% / .6)" stroke-width="1.6"/>`; }); break;
    case 8: rep(96, y=>{ s+=`<rect x="10" y="${y}" width="98" height="44" rx="5" fill="hsl(${hue} 45% 13%)" stroke="hsl(${hue} 85% 58%)" stroke-width="1.5"/>`;
        for(let b=0;b<8;b++) s+=`<rect x="${18+b*11}" y="${y+16}" width="8" height="12" rx="1" fill="hsl(${hue} 90% ${r()<.5?65:22}%)" ${r()<.3?`class="blink" style="animation-delay:${f1(r()*1.7)}s"`:""}/>`; }); break;
    case 9: rep(120, y=>{ s+=`<rect x="12" y="${y}" width="96" height="70" rx="7" fill="#1a060b" stroke="hsl(${hue} 90% 60%)" stroke-width="2"/><rect x="22" y="${y+44}" width="76" height="10" rx="2" fill="hsl(${hue} 90% 60% / .5)" class="blink" style="animation-delay:${f1(r()*1.7)}s"/>`; }); break;
  }
  return vwall(s, H, side);
}
function virusGlyph(level, hue){
  const n=8+level, rr=12+level*.6, len=8+level*.45; let s="";
  for(let i=0;i<n;i++){ const a=i/n*Math.PI*2, c=Math.cos(a), si=Math.sin(a);
    s+=`<line x1="${f1(c*rr)}" y1="${f1(si*rr)}" x2="${f1(c*(rr+len))}" y2="${f1(si*(rr+len))}" stroke="hsl(${hue} 85% 64%)" stroke-width="2.4" stroke-linecap="round"/><circle cx="${f1(c*(rr+len))}" cy="${f1(si*(rr+len))}" r="2.8" fill="hsl(${hue} 95% 72%)"/>`; }
  s+=`<circle r="${rr}" fill="hsl(${hue} 55% 13%)" stroke="hsl(${hue} 90% 64%)" stroke-width="2.4"/>`;
  const k=4+Math.floor(level/2); for(let i=0;i<k;i++){ const a=i/k*Math.PI*2+level; s+=`<circle cx="${f1(Math.cos(a)*rr*.5)}" cy="${f1(Math.sin(a)*rr*.5)}" r="2.6" fill="hsl(${hue} 95% 72%)"/>`; }
  return avatarSVG(`<g class="vspin">${s}</g>`);
}
function sprite(rows, colors, px=7){ let s=""; rows.forEach((row,y)=>[...row].forEach((ch,x)=>{ if(ch===".") return; s+=`<rect x="${x*px}" y="${y*px}" width="${px}" height="${px}" fill="${colors[ch]}"/>`; }));
  const w=rows[0].length*px, h=rows.length*px; return `<svg width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" shape-rendering="crispEdges">${s}</svg>`; }
function entity(t, c){
  if (t==="gem") return sprite(["..#.#.#.#..","..#.#.#.#..","###########","#.........#","#....o....#","#...oo....#","#....o....#","#....o....#","#...ooo...#","#.........#","###########","..#.#.#.#..","..#.#.#.#.."],{"#":c,"o":"#fff6ff"},7);
  if (t==="rootkit") return sprite(["..#####..",".#######.","#########","##..#..##","##..#..##","#########",".###.###.","..#####..","..#.#.#.."],{"#":c},9);
  if (t==="trojan") return sprite(["....##........","...####.......","..##.##.......","..#..##.......",".....###......",".....#########",".....#########",".....#########",".....#.#...#.#",".....#.#...#.#","....##########",".....o..o..o.."],{"#":c,"o":"#7a4a1c"},7);
  if (t==="adware") return `<svg width="190" height="100" viewBox="0 0 190 100">${[[0,20,"WIN!!"],[62,0,"CLICK"],[118,30,"FREE"]].map(([x,y,w],i)=>`<g class="drift" style="animation-delay:${-i*1.4}s;animation-duration:${2+i*.6}s"><rect x="${x}" y="${y}" width="70" height="52" rx="4" fill="#191505" stroke="${c}" stroke-width="2"/><rect x="${x}" y="${y}" width="70" height="12" fill="${c}"/><text x="${x+62}" y="${y+10}" font-family="IBM Plex Mono,monospace" font-size="10" font-weight="700" fill="#191505" text-anchor="middle">×</text><text x="${x+35}" y="${y+38}" font-family="Chakra Petch,sans-serif" font-size="14" font-weight="700" fill="${c}" text-anchor="middle">${w}</text></g>`).join("")}</svg>`;
  if (t==="spam") return `<svg width="200" height="96" viewBox="0 0 200 96">${[[10,30],[52,6],[92,40],[134,10],[160,52],[70,62]].map(([x,y],i)=>`<g class="drift" style="animation-delay:${-i*1.1}s;animation-duration:${3+i*.5}s"><rect x="${x}" y="${y}" width="34" height="24" rx="2" fill="#121a1f" stroke="${c}" stroke-width="2"/><path d="M${x} ${y} l17 13 l17 -13" fill="none" stroke="${c}" stroke-width="2"/></g>`).join("")}</svg>`;
  return null;
}
function network(len){
  const r = srand(3); let net = "";
  const nodes = Array.from({length:22},()=>[f1(6+r()*88), f1(40+r()*(len-140))]);
  nodes.forEach((a,i)=>{ const b=nodes[(i*7+3)%nodes.length], c=nodes[(i+1)%nodes.length];
    net += `<line x1="${a[0]}%" y1="${a[1]}" x2="${b[0]}%" y2="${b[1]}" stroke="#2f6aa8" stroke-opacity=".35"/><line x1="${a[0]}%" y1="${a[1]}" x2="${c[0]}%" y2="${c[1]}" stroke="#2f6aa8" stroke-opacity=".2"/>`; });
  nodes.forEach(([x,y],i)=> net += `<circle cx="${x}%" cy="${y}" r="${i%4?3:5}" fill="#6cb6ff" ${i%3?"":'class="blink"'} style="animation-delay:${i*.2}s"/>`);
  return `<svg width="100%" height="${len}" aria-hidden="true">${net}</svg>`;
}
const UMs = p => Math.round(p*10).toLocaleString();
registerSubject({
  key:"cs", name:"Computer Science", theme:"A virus sinking into a computer", gemWord:"Computer", gemTitle:"One in a Computer", emoji:"🦠",
  blurb:"You're a virus on the open internet. Each prompt has many correct answers. <b>Obvious answers barely sink. Valid answers other players didn't think of plunge you deeper</b>, through the case, the motherboard, RAM and the buses, into the CPU's registers.",
  axis:"down", arrow:"▼",
  tiers:{gem:"One in a Computer", rootkit:"Rootkit", trojan:"Trojan", adware:"Adware", spam:"Spam"}, blocked:"Access denied", fw:"FIREWALL",
  notes:{rootkit:"Deep in the system. Very few players went this way.", trojan:"Genuinely uncommon. It slipped past the scanners.", adware:"Fairly common. It got in, but people noticed."},
  verbs:{cta:"Descend ▼", inject:"Inject", hint:"▼ rarer answers sink deeper ▼", count:"descending"},
  particles:["1","0"], particleColor:"#5dffb0",
  meter:{label:"DEPTH", fmt:p=>UMs(p)+" µm", zone:p=>UMs(p)+' <span style="text-transform:none">µm</span>', tick:p=>UMs(p), gain:(a,b)=>`sink ${UMs(b-a)} µm`},
  start:{bg:"linear-gradient(#0b1d38,#081426 70%,#0c1a2a)", label:'Start · 0 <span style="text-transform:none">µm</span>', zone:"The open internet", color:"#6cb6ff", deco:network},
  zone0:190, endBg:"#0a0103",
  bands:BANDS, facts:FACTS, deco:(i,len)=>wallSVG(i,len,"l")+wallSVG(i,len,"r"), avatar:virusGlyph, entity,
  extras:({pos})=>`<div class="usb" style="top:${pos(0)-8}px"></div><div class="pins" style="top:${pos(250)+4}px"></div><div class="coreglow" style="top:${pos(700)}px"></div><div class="floor" style="top:${pos(760)}px;background:linear-gradient(#3a0610,#0a0103)"></div>`,
  catalog:CATALOG, prompts:PROMPTS,
});
})();
