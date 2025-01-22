const pi = 3.14;
let radius = 6378e3;
let cirCumference = 2 * pi * radius;
let surfaceArea = 4 * (pi) *  (radius) ** 2 ;
let volume =  4 * (pi) * ((radius) ** 3) / 3;
document.write('The radius of the sphere is ' + radius + '.<br>');
document.write('The circumference is ' + cirCumference + '.<br>');
document.write('The surface area is ' + surfaceArea + '.<br>');
document.write('The volume is ' + volume + '.<br>');