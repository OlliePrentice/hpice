
export default function PressureChart() {

if ( $( '#PressureVesselCalculator' ).length ) {

var _0xf6f2 = [
    "\x6E",
    "\x73\x70\x69\x6E\x6E\x65\x72",
    "\x2E\x73\x65\x6C\x65\x63\x74\x6F\x72",
    "\x62\x75\x74\x74\x6F\x6E\x73\x65\x74",
    "\x23\x76\x65\x73\x73\x65\x6C\x44\x69\x76",
    "\x68\x69\x64\x65",
    "\x23\x66\x6C\x75\x69\x64\x44\x69\x76",
    "\x23\x70\x72\x65\x73\x73\x75\x72\x65\x44\x69\x76",
    "\x23\x76\x6F\x6C\x75\x6D\x65\x44\x69\x76",
    "\x63\x68\x61\x6E\x67\x65",
    "\x69\x6E\x70\x75\x74",
    "\x73\x69\x62\x6C\x69\x6E\x67\x73",
    "\x63\x6C\x69\x63\x6B",
    "\x2E\x75\x69\x2D\x73\x70\x69\x6E\x6E\x65\x72\x2D\x62\x75\x74\x74\x6F\x6E",
    "\x73\x65\x6C\x65\x63\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x43\x68\x61\x72\x74\x53\x65\x6C\x65\x63\x74\x22\x5D",
    "",
    "\x76\x61\x6C",
    "\x23\x76\x44\x69\x61\x6D\x65\x74\x65\x72",
    "\x23\x76\x4C\x65\x6E\x67\x74\x68",
    "\x23\x78\x76\x61\x6C",
    "\x23\x79\x76\x61\x6C",
    "\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x76\x65\x73\x73\x65\x6C\x22\x5D",
    "\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x66\x6C\x75\x69\x64\x22\x5D",
    "\x50\x49",
    "\x70\x6F\x77",
    "\x72\x6F\x75\x6E\x64",
    "\x69\x6E\x70\x75\x74\x3A\x72\x61\x64\x69\x6F\x5B\x6E\x61\x6D\x65\x3D\x76\x65\x73\x73\x65\x6C\x5D\x3A\x63\x68\x65\x63\x6B\x65\x64",
    "\x53\x47",
    "\x62\x6C\x69\x6E\x64",
    "\x73\x68\x6F\x77",
    "\x56\x6F\x6C\x75\x6D\x65\x3A",
    "\x74\x65\x78\x74",
    "\x23\x76\x6F\x6C\x4C\x61\x62\x65\x6C",
    "\x4C",
    "\x23\x75\x6E\x69\x74\x4C\x61\x62\x65\x6C",
    "\x50",
    "\x44\x69\x61\x6D\x65\x74\x65\x72\x3A",
    "\x6D\x6D",
    "\x56",
    "\x69\x6E\x70\x75\x74\x3A\x72\x61\x64\x69\x6F\x5B\x6E\x61\x6D\x65\x3D\x76\x65\x73\x73\x65\x6C\x5D",
    "\x72\x65\x61\x64\x79",
    "\x64\x6F\x63\x75\x6D\x65\x6E\x74",
    "\x23\x63\x68\x61\x72\x74\x4C\x61\x62\x65\x6C",
    "\x23\x6E\x6F\x74\x65\x73\x4C\x61\x62\x65\x6C",
    "\x23\x72\x65\x73\x75\x6C\x74\x4C\x61\x62\x65\x6C",
    "\x23\x6D\x6F\x64\x75\x6C\x65\x4C\x61\x62\x65\x6C",
    "\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x76\x65\x73\x73\x65\x6C\x22\x5D\x3A\x63\x68\x65\x63\x6B\x65\x64",
    "\x69\x6E\x70\x75\x74\x5B\x6E\x61\x6D\x65\x3D\x22\x66\x6C\x75\x69\x64\x22\x5D\x3A\x63\x68\x65\x63\x6B\x65\x64",
    "\x56\x47\x31",
    "\x43\x68\x61\x72\x74\x20\x31\x20\x2D\x20\x56\x65\x73\x73\x65\x6C\x73\x20\x66\x6F\x72\x20\x47\x72\x6F\x75\x70\x20\x31\x20\x67\x61\x73\x65\x73",
    "\x56\x47\x32",
    "\x43\x68\x61\x72\x74\x20\x32\x20\x2D\x20\x56\x65\x73\x73\x65\x6C\x73\x20\x66\x6F\x72\x20\x47\x72\x6F\x75\x70\x20\x32\x20\x67\x61\x73\x65\x73",
    "\x56\x4C\x31",
    "\x43\x68\x61\x72\x74\x20\x33\x20\x2D\x20\x56\x65\x73\x73\x65\x6C\x73\x20\x66\x6F\x72\x20\x47\x72\x6F\x75\x70\x20\x31\x20\x6C\x69\x71\x75\x69\x64\x73",
    "\x56\x4C\x32",
    "\x43\x68\x61\x72\x74\x20\x34\x20\x2D\x20\x56\x65\x73\x73\x65\x6C\x73\x20\x66\x6F\x72\x20\x47\x72\x6F\x75\x70\x20\x32\x20\x6C\x69\x71\x75\x69\x64\x73",
    "\x43\x68\x61\x72\x74\x20\x35\x20\x2D\x20\x53\x74\x65\x61\x6D\x20\x47\x65\x6E\x65\x72\x61\x74\x6F\x72\x73",
    "\x50\x47\x31",
    "\x43\x68\x61\x72\x74\x20\x36\x20\x2D\x20\x50\x69\x70\x69\x6E\x67\x20\x66\x6F\x72\x20\x47\x72\x6F\x75\x70\x20\x31\x20\x67\x61\x73\x65\x73",
    "\x50\x47\x32",
    "\x43\x68\x61\x72\x74\x20\x37\x20\x2D\x20\x50\x69\x70\x69\x6E\x67\x20\x66\x6F\x72\x20\x47\x72\x6F\x75\x70\x20\x32\x20\x67\x61\x73\x65\x73",
    "\x50\x4C\x31",
    "\x43\x68\x61\x72\x74\x20\x38\x20\x2D\x20\x50\x69\x70\x69\x6E\x67\x20\x66\x6F\x72\x20\x47\x72\x6F\x75\x70\x20\x31\x20\x6C\x69\x71\x75\x69\x64\x73",
    "\x50\x4C\x32",
    "\x43\x68\x61\x72\x74\x20\x39\x20\x2D\x20\x50\x69\x70\x69\x6E\x67\x20\x66\x6F\x72\x20\x47\x72\x6F\x75\x70\x20\x32\x20\x6C\x69\x71\x75\x69\x64\x73",
    "\x45\x78\x63\x65\x70\x74\x69\x6F\x6E\x61\x6C\x6C\x79\x2C\x20\x76\x65\x73\x73\x65\x6C\x73\x20\x69\x6E\x74\x65\x6E\x64\x65\x64\x20\x74\x6F\x20\x63\x6F\x6E\x74\x61\x69\x6E\x20\x61\x6E\x20\x75\x6E\x73\x74\x61\x62\x6C\x65\x20\x67\x61\x73\x20\x61\x6E\x64\x20\x66\x61\x6C\x6C\x69\x6E\x67\x20\x77\x69\x74\x68\x69\x6E\x20\x63\x61\x74\x65\x67\x6F\x72\x69\x65\x73\x20\x49\x20\x6F\x72\x20\x49\x49\x20\x6F\x6E\x20\x74\x68\x65\x20\x62\x61\x73\x69\x73\x20\x6F\x66\x20\x43\x68\x61\x72\x74\x20\x31\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x63\x6C\x61\x73\x73\x69\x66\x69\x65\x64\x20\x69\x6E\x20\x63\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x49\x49",
    "\x45\x78\x63\x65\x70\x74\x69\x6F\x6E\x61\x6C\x6C\x79\x2C\x20\x70\x6F\x72\x74\x61\x62\x6C\x65\x20\x65\x78\x74\x69\x6E\x67\x75\x69\x73\x68\x65\x72\x73\x20\x61\x6E\x64\x20\x62\x6F\x74\x74\x6C\x65\x73\x20\x66\x6F\x72\x20\x62\x72\x65\x61\x74\x68\x69\x6E\x67\x20\x65\x71\x75\x69\x70\x6D\x65\x6E\x74\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x63\x6C\x61\x73\x73\x69\x66\x69\x65\x64\x20\x61\x74\x20\x6C\x65\x61\x73\x74\x20\x69\x6E\x20\x63\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x49\x49",
    "\x45\x78\x63\x65\x70\x74\x69\x6F\x6E\x61\x6C\x6C\x79\x2C\x20\x61\x73\x73\x65\x6D\x62\x6C\x69\x65\x73\x20\x69\x6E\x74\x65\x6E\x64\x65\x64\x20\x66\x6F\x72\x20\x67\x65\x6E\x65\x72\x61\x74\x69\x6E\x67\x20\x77\x61\x72\x6D\x20\x77\x61\x74\x65\x72\x20\x61\x73\x20\x72\x65\x66\x65\x72\x72\x65\x64\x20\x74\x6F\x20\x69\x6E\x20\x74\x68\x65\x20\x73\x65\x63\x6F\x6E\x64\x20\x73\x75\x62\x70\x61\x72\x61\x67\x72\x61\x70\x68\x20\x6F\x66\x20\x41\x72\x74\x69\x63\x6C\x65\x20\x34\x28\x32\x29\x2C\x20\x73\x68\x61\x6C\x6C\x20\x62\x65\x20\x73\x75\x62\x6A\x65\x63\x74\x20\x65\x69\x74\x68\x65\x72\x20\x74\x6F\x20\x61\x6E\x20\x45\x55\x2D\x74\x79\x70\x65\x20\x65\x78\x61\x6D\x69\x6E\x61\x74\x69\x6F\x6E\x20\x28\x4D\x6F\x64\x75\x6C\x65\x20\x42\x20\x2D\x20\x64\x65\x73\x69\x67\x6E\x20\x74\x79\x70\x65\x29\x20\x77\x69\x74\x68\x20\x72\x65\x73\x70\x65\x63\x74\x20\x74\x6F\x20\x74\x68\x65\x69\x72\x20\x63\x6F\x6E\x66\x6F\x72\x6D\x69\x74\x79\x20\x77\x69\x74\x68\x20\x74\x68\x65\x20\x65\x73\x73\x65\x6E\x74\x69\x61\x6C\x20\x72\x65\x71\x75\x69\x72\x65\x6D\x65\x6E\x74\x73\x20\x72\x65\x66\x65\x72\x72\x65\x64\x20\x74\x6F\x20\x69\x6E\x20\x70\x6F\x69\x6E\x74\x73\x20\x32\x2E\x31\x30\x2C\x20\x32\x2E\x31\x31\x2C\x20\x33\x2E\x34\x2C\x20\x35\x28\x61\x29\x20\x61\x6E\x64\x20\x35\x28\x64\x29\x20\x6F\x66\x20\x41\x6E\x6E\x65\x78\x20\x49\x2C\x20\x6F\x72\x20\x74\x6F\x20\x66\x75\x6C\x6C\x20\x71\x75\x61\x6C\x69\x74\x79\x20\x61\x73\x73\x75\x72\x61\x6E\x63\x65\x20\x28\x4D\x6F\x64\x75\x6C\x65\x20\x48\x29\x2E",
    "\x45\x78\x63\x65\x70\x74\x69\x6F\x6E\x61\x6C\x6C\x79\x2C\x20\x74\x68\x65\x20\x64\x65\x73\x69\x67\x6E\x20\x6F\x66\x20\x70\x72\x65\x73\x73\x75\x72\x65\x20\x63\x6F\x6F\x6B\x65\x72\x73\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x73\x75\x62\x6A\x65\x63\x74\x20\x74\x6F\x20\x61\x20\x63\x6F\x6E\x66\x6F\x72\x6D\x69\x74\x79\x20\x61\x73\x73\x65\x73\x73\x6D\x65\x6E\x74\x20\x70\x72\x6F\x63\x65\x64\x75\x72\x65\x20\x65\x71\x75\x69\x76\x61\x6C\x65\x6E\x74\x20\x74\x6F\x20\x61\x74\x20\x6C\x65\x61\x73\x74\x20\x6F\x6E\x65\x20\x6F\x66\x20\x74\x68\x65\x20\x63\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x49\x49\x20\x6D\x6F\x64\x75\x6C\x65\x73",
    "\x45\x78\x63\x65\x70\x74\x69\x6F\x6E\x61\x6C\x6C\x79\x2C\x20\x70\x69\x70\x69\x6E\x67\x20\x69\x6E\x74\x65\x6E\x64\x65\x64\x20\x66\x6F\x72\x20\x75\x6E\x73\x74\x61\x62\x6C\x65\x20\x67\x61\x73\x65\x73\x20\x61\x6E\x64\x20\x66\x61\x6C\x6C\x69\x6E\x67\x20\x77\x69\x74\x68\x69\x6E\x20\x63\x61\x74\x65\x67\x6F\x72\x69\x65\x73\x20\x49\x20\x6F\x72\x20\x49\x49\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x63\x6C\x61\x73\x73\x69\x66\x69\x65\x64\x20\x69\x6E\x20\x63\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x49\x49",
    "\x45\x78\x63\x65\x70\x74\x69\x6F\x6E\x61\x6C\x6C\x79\x2C\x20\x61\x6C\x6C\x20\x70\x69\x70\x69\x6E\x67\x20\x63\x6F\x6E\x74\x61\x69\x6E\x69\x6E\x67\x20\x66\x6C\x75\x69\x64\x73\x20\x61\x74\x20\x61\x20\x74\x65\x6D\x70\x65\x72\x61\x74\x75\x72\x65\x20\x67\x72\x65\x61\x74\x65\x72\x20\x74\x68\x61\x6E\x20\x33\x35\x30\xB0\x43\x20\x61\x6E\x64\x20\x66\x61\x6C\x6C\x69\x6E\x67\x20\x77\x69\x74\x68\x69\x6E\x20\x63\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x49\x20\x6D\x75\x73\x74\x20\x62\x65\x20\x63\x6C\x61\x73\x73\x69\x66\x69\x65\x64\x20\x69\x6E\x20\x63\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x49\x49",
    "\x50\x6F\x69\x6E\x74\x35",
    "\x43\x61\x74\x65\x67\x6F\x72\x79\x3A\x20\x50\x72\x65\x73\x73\x75\x72\x65\x20\x62\x65\x6C\x6F\x77\x20\x30\x2E\x35\x20\x62\x61\x72",
    "\x53\x6D\x61\x6C\x6C\x56",
    "\x43\x61\x74\x65\x67\x6F\x72\x79\x3A\x20\x56\x6F\x6C\x75\x6D\x65\x20\x3C\x3D\x20\x30\x2E\x31\x20\x4C\x69\x74\x72\x65",
    "\x53\x45\x50",
    "\x43\x61\x74\x65\x67\x6F\x72\x79\x3A\x20\x53\x6F\x75\x6E\x64\x20\x45\x6E\x67\x69\x6E\x65\x65\x72\x69\x6E\x67\x20\x50\x72\x61\x63\x74\x69\x63\x65",
    "\x43\x61\x74\x31",
    "\x43\x61\x74\x65\x67\x6F\x72\x79\x3A\x20\x43\x61\x74\x65\x67\x6F\x72\x79\x20\x49",
    "\x43\x61\x74\x32",
    "\x43\x61\x74\x65\x67\x6F\x72\x79\x3A\x20\x43\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x49",
    "\x43\x61\x74\x33",
    "\x43\x61\x74\x65\x67\x6F\x72\x79\x3A\x20\x43\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x49\x49",
    "\x43\x61\x74\x34",
    "\x43\x61\x74\x65\x67\x6F\x72\x79\x3A\x20\x43\x61\x74\x65\x67\x6F\x72\x79\x20\x49\x56",
    "\x20",
    "\x52\x65\x66\x65\x72\x20\x74\x6F\x20\x67\x75\x69\x64\x65\x6C\x69\x6E\x65\x20\x31\x2F\x35",
    "\x41\x76\x61\x69\x6C\x61\x62\x6C\x65\x20\x6D\x6F\x64\x75\x6C\x65\x73\x3A\x20\x20\x41",
    "\x41\x76\x61\x69\x6C\x61\x62\x6C\x65\x20\x6D\x6F\x64\x75\x6C\x65\x73\x3A\x20\x20\x41\x32\x2C\x20\x44\x31\x2C\x20\x45\x31",
    "\x41\x76\x61\x69\x6C\x61\x62\x6C\x65\x20\x6D\x6F\x64\x75\x6C\x65\x73\x3A\x20\x20\x42\x28\x64\x65\x73\x29\x20\x2B\x20\x44\x2C\x20\x42\x28\x64\x65\x73\x29\x20\x2B\x20\x46\x2C\x20\x42\x28\x70\x72\x6F\x64\x29\x20\x2B\x20\x45\x2C\x20\x42\x28\x70\x72\x6F\x64\x29\x20\x2B\x20\x43\x32\x2C\x20\x48",
    "\x41\x76\x61\x69\x6C\x61\x62\x6C\x65\x20\x6D\x6F\x64\x75\x6C\x65\x73\x3A\x20\x20\x42\x28\x70\x72\x6F\x64\x29\x20\x2B\x20\x44\x2C\x20\x42\x28\x70\x72\x6F\x64\x29\x20\x2B\x20\x46\x2C\x20\x47\x2C\x20\x48\x31",
    "\x23\x70\x6C\x61\x63\x65\x68\x6F\x6C\x64\x65\x72",
    "\x6C\x6F\x67",
    "\x70\x6C\x6F\x74",
    "\x70\x6F\x69\x6E\x74\x4F\x66\x66\x73\x65\x74",
    "\x30\x2E\x31",
    "\x56\x28\x4C\x29",
    "\x30\x2E\x35",
    "\x50\x53\x28\x62\x61\x72\x29",
    "\x44\x4E\x28\x6D\x6D\x29",
    "\x72\x67\x62\x61\x28\x31\x33\x2C\x20\x31\x31\x31\x2C\x20\x31\x36\x38\x2C\x20\x30\x2E\x35\x29",
    "\x23\x31\x34\x33\x39\x36\x44",
    "\x72\x67\x62\x61\x28\x31\x33\x2C\x20\x31\x31\x31\x2C\x20\x31\x36\x38\x2C\x20\x30\x2E\x38\x29",
    "\x6C\x65\x66\x74",
    "\x3C\x64\x69\x76\x20\x73\x74\x79\x6C\x65\x3D\x27\x70\x6F\x73\x69\x74\x69\x6F\x6E\x3A\x61\x62\x73\x6F\x6C\x75\x74\x65\x3B\x6C\x65\x66\x74\x3A",
    "\x70\x78\x3B\x66\x6F\x6E\x74\x2D\x77\x65\x69\x67\x68\x74\x3A\x62\x6F\x6C\x64\x3B\x74\x6F\x70\x3A",
    "\x74\x6F\x70",
    "\x70\x78\x3B\x27\x3E\x53\x45\x50\x3C\x2F\x64\x69\x76\x3E",
    "\x61\x70\x70\x65\x6E\x64",
    "\x70\x78\x3B\x27\x3E\x49\x3C\x2F\x64\x69\x76\x3E",
    "\x70\x78\x3B\x27\x3E\x49\x49\x3C\x2F\x64\x69\x76\x3E",
    "\x70\x78\x3B\x27\x3E\x49\x49\x49\x3C\x2F\x64\x69\x76\x3E",
    "\x70\x78\x3B\x27\x3E\x49\x56\x3C\x2F\x64\x69\x76\x3E",
    "\x62\x6F\x64\x79"
  ];
  jQuery(document)[_0xf6f2[40]](function (_0xced2x1) {
    _0xced2x1(function () {
      _0xced2x1(_0xf6f2[2])[_0xf6f2[1]]({ numberFormat: _0xf6f2[0], min: 0 });
      _0xced2x1(_0xf6f2[4])[_0xf6f2[3]]();
      _0xced2x1(_0xf6f2[6])[_0xf6f2[3]]()[_0xf6f2[5]]();
      _0xced2x1(_0xf6f2[7])[_0xf6f2[5]]();
      _0xced2x1(_0xf6f2[8])[_0xf6f2[5]]();
      _0xced2x1(_0xf6f2[13])[_0xf6f2[12]](function () {
        _0xced2x1(this)[_0xf6f2[11]](_0xf6f2[10])[_0xf6f2[9]]();
      });
      _0xced2x1(_0xf6f2[14])[_0xf6f2[9]](function () {
        _0xced2x2();
      });
      _0xced2x1(_0xf6f2[19])[_0xf6f2[9]](function () {
        _0xced2x2();
        _0xced2x1(_0xf6f2[17])[_0xf6f2[16]](_0xf6f2[15]);
        _0xced2x1(_0xf6f2[18])[_0xf6f2[16]](_0xf6f2[15]);
      });
      _0xced2x1(_0xf6f2[20])[_0xf6f2[9]](function () {
        _0xced2x2();
      });
      _0xced2x1(_0xf6f2[21])[_0xf6f2[9]](function () {
        _0xced2x2();
      });
      _0xced2x1(_0xf6f2[22])[_0xf6f2[9]](function () {
        _0xced2x2();
      });
      _0xced2x1(_0xf6f2[17])[_0xf6f2[9]](function () {
        _0xced2x1(_0xf6f2[19])[_0xf6f2[16]](
          Math[_0xf6f2[25]](
            (Math[_0xf6f2[23]] *
              Math[_0xf6f2[24]](_0xced2x1(_0xf6f2[17])[_0xf6f2[16]]() / 2, 2) *
              _0xced2x1(_0xf6f2[18])[_0xf6f2[16]]()) /
              100000
          ) / 10
        );
        _0xced2x2();
      });
      _0xced2x1(_0xf6f2[18])[_0xf6f2[9]](function () {
        _0xced2x1(_0xf6f2[19])[_0xf6f2[16]](
          Math[_0xf6f2[25]](
            (Math[_0xf6f2[23]] *
              Math[_0xf6f2[24]](_0xced2x1(_0xf6f2[17])[_0xf6f2[16]]() / 2, 2) *
              _0xced2x1(_0xf6f2[18])[_0xf6f2[16]]()) /
              100000
          ) / 10
        );
        _0xced2x2();
      });
    });
    _0xced2x1(_0xf6f2[41])[_0xf6f2[40]](
      _0xced2x1(function () {
        _0xced2x1(_0xf6f2[39])[_0xf6f2[9]](function () {
          if (_0xced2x1(_0xf6f2[26])[_0xf6f2[16]]() == _0xf6f2[27]) {
            _0xced2x1(_0xf6f2[6])[_0xf6f2[5]](_0xf6f2[28]);
            _0xced2x1(_0xf6f2[7])[_0xf6f2[29]](_0xf6f2[28]);
            _0xced2x1(_0xf6f2[32])[_0xf6f2[31]](_0xf6f2[30]);
            _0xced2x1(_0xf6f2[34])[_0xf6f2[31]](_0xf6f2[33]);
            _0xced2x1(_0xf6f2[8])[_0xf6f2[29]](_0xf6f2[28]);
          } else {
            if (_0xced2x1(_0xf6f2[26])[_0xf6f2[16]]() == _0xf6f2[35]) {
              _0xced2x1(_0xf6f2[6])[_0xf6f2[29]](_0xf6f2[28]);
              _0xced2x1(_0xf6f2[7])[_0xf6f2[29]](_0xf6f2[28]);
              _0xced2x1(_0xf6f2[32])[_0xf6f2[31]](_0xf6f2[36]);
              _0xced2x1(_0xf6f2[34])[_0xf6f2[31]](_0xf6f2[37]);
              _0xced2x1(_0xf6f2[8])[_0xf6f2[5]](_0xf6f2[28]);
            } else {
              if (_0xced2x1(_0xf6f2[26])[_0xf6f2[16]]() == _0xf6f2[38]) {
                _0xced2x1(_0xf6f2[6])[_0xf6f2[29]](_0xf6f2[28]);
                _0xced2x1(_0xf6f2[7])[_0xf6f2[29]](_0xf6f2[28]);
                _0xced2x1(_0xf6f2[32])[_0xf6f2[31]](_0xf6f2[30]);
                _0xced2x1(_0xf6f2[34])[_0xf6f2[31]](_0xf6f2[33]);
                _0xced2x1(_0xf6f2[8])[_0xf6f2[29]](_0xf6f2[28]);
              } else {
                _0xced2x1(_0xf6f2[6])[_0xf6f2[5]](_0xf6f2[28]);
                _0xced2x1(_0xf6f2[7])[_0xf6f2[5]](_0xf6f2[28]);
                _0xced2x1(_0xf6f2[8])[_0xf6f2[5]](_0xf6f2[28]);
              }
            }
          }
        });
      })
    );
    function _0xced2x2() {
      var _0xced2x3 = _0xced2x7();
      var _0xced2x4 = _0xced2x1(_0xf6f2[19])[_0xf6f2[16]]();
      var _0xced2x5 = _0xced2x1(_0xf6f2[20])[_0xf6f2[16]]();
      var _0xced2x6 = _0xced2xe(_0xced2x3, _0xced2x4, _0xced2x5);
      _0xced2x1(_0xf6f2[42])[_0xf6f2[31]](_0xced2xa(_0xced2x3));
      _0xced2x1(_0xf6f2[43])[_0xf6f2[31]](_0xced2xb(_0xced2x3));
      _0xced2x1(_0xf6f2[44])[_0xf6f2[31]](_0xced2xc(_0xced2x6));
      _0xced2x1(_0xf6f2[45])[_0xf6f2[31]](_0xced2xd(_0xced2x6));
      _0xced2x13(_0xced2x3, _0xced2x6, _0xced2x4, _0xced2x5);
    }
    function _0xced2x7() {
      var _0xced2x8 = _0xced2x1(_0xf6f2[46])[_0xf6f2[16]]();
      var _0xced2x9 = _0xced2x1(_0xf6f2[47])[_0xf6f2[16]]();
      if (_0xced2x8 == _0xf6f2[27]) {
        return _0xced2x8;
      } else {
        if (_0xced2x9 == undefined) {
          return _0xf6f2[15];
        } else {
          return _0xced2x8 + _0xced2x9;
        }
      }
    }
    function _0xced2xa(_0xced2x3) {
      if (_0xced2x3 == _0xf6f2[48]) {
        return _0xf6f2[49];
      }
      if (_0xced2x3 == _0xf6f2[50]) {
        return _0xf6f2[51];
      }
      if (_0xced2x3 == _0xf6f2[52]) {
        return _0xf6f2[53];
      }
      if (_0xced2x3 == _0xf6f2[54]) {
        return _0xf6f2[55];
      }
      if (_0xced2x3 == _0xf6f2[27]) {
        return _0xf6f2[56];
      }
      if (_0xced2x3 == _0xf6f2[57]) {
        return _0xf6f2[58];
      }
      if (_0xced2x3 == _0xf6f2[59]) {
        return _0xf6f2[60];
      }
      if (_0xced2x3 == _0xf6f2[61]) {
        return _0xf6f2[62];
      }
      if (_0xced2x3 == _0xf6f2[63]) {
        return _0xf6f2[64];
      }
      return _0xf6f2[15];
    }
    function _0xced2xb(_0xced2x3) {
      if (_0xced2x3 == _0xf6f2[48]) {
        return _0xf6f2[65];
      }
      if (_0xced2x3 == _0xf6f2[50]) {
        return _0xf6f2[66];
      }
      if (_0xced2x3 == _0xf6f2[54]) {
        return _0xf6f2[67];
      }
      if (_0xced2x3 == _0xf6f2[27]) {
        return _0xf6f2[68];
      }
      if (_0xced2x3 == _0xf6f2[57]) {
        return _0xf6f2[69];
      }
      if (_0xced2x3 == _0xf6f2[59]) {
        return _0xf6f2[70];
      }
      return _0xf6f2[15];
    }
    function _0xced2xc(_0xced2x6) {
      if (_0xced2x6 == _0xf6f2[71]) {
        return _0xf6f2[72];
      }
      if (_0xced2x6 == _0xf6f2[73]) {
        return _0xf6f2[74];
      }
      if (_0xced2x6 == _0xf6f2[75]) {
        return _0xf6f2[76];
      }
      if (_0xced2x6 == _0xf6f2[77]) {
        return _0xf6f2[78];
      }
      if (_0xced2x6 == _0xf6f2[79]) {
        return _0xf6f2[80];
      }
      if (_0xced2x6 == _0xf6f2[81]) {
        return _0xf6f2[82];
      }
      if (_0xced2x6 == _0xf6f2[83]) {
        return _0xf6f2[84];
      }
      return _0xf6f2[15];
    }
    function _0xced2xd(_0xced2x6) {
      if (_0xced2x6 == _0xf6f2[71]) {
        return _0xf6f2[85];
      }
      if (_0xced2x6 == _0xf6f2[73]) {
        return _0xf6f2[86];
      }
      if (_0xced2x6 == _0xf6f2[75]) {
        return _0xf6f2[85];
      }
      if (_0xced2x6 == _0xf6f2[77]) {
        return _0xf6f2[87];
      }
      if (_0xced2x6 == _0xf6f2[79]) {
        return _0xf6f2[88];
      }
      if (_0xced2x6 == _0xf6f2[81]) {
        return _0xf6f2[89];
      }
      if (_0xced2x6 == _0xf6f2[83]) {
        return _0xf6f2[90];
      }
      return _0xf6f2[85];
    }
    function _0xced2xe(_0xced2x3, _0xced2xf, _0xced2x10) {
      var _0xced2x11 = {
        Point5: _0xf6f2[71],
        SmallV: _0xf6f2[73],
        SEP: _0xf6f2[75],
        Cat1: _0xf6f2[77],
        Cat2: _0xf6f2[79],
        Cat3: _0xf6f2[81],
        Cat4: _0xf6f2[83]
      };
      var _0xced2x12 = _0xced2x10 * _0xced2xf;
      if (_0xced2x10 <= 0.5) {
        return _0xced2x11[_0xf6f2[71]];
      }
      if (
        _0xced2xf <= 0.1 &&
        (_0xced2x3 == _0xf6f2[48] ||
          _0xced2x3 == _0xf6f2[50] ||
          _0xced2x3 == _0xf6f2[52] ||
          _0xced2x3 == _0xf6f2[54])
      ) {
        return _0xced2x11[_0xf6f2[73]];
      }
      switch (_0xced2x3) {
        case _0xf6f2[27]:
          if (_0xced2xf <= 2) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (_0xced2x12 <= 50) {
            return _0xced2x11[_0xf6f2[77]];
          }
          if (_0xced2x10 <= 32) {
            if (_0xced2x12 <= 200) {
              return _0xced2x11[_0xf6f2[79]];
            }
            if (_0xced2xf <= 1000 && _0xced2x12 <= 3000) {
              return _0xced2x11[_0xf6f2[81]];
            }
          }
          return _0xced2x11[_0xf6f2[83]];
        case _0xf6f2[48]:
          if ((_0xced2xf <= 1 && _0xced2x10 <= 200) || _0xced2x12 <= 25) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (_0xced2xf > 1 && _0xced2x2e(_0xced2x12, 25, 50)) {
            return _0xced2x11[_0xf6f2[77]];
          }
          if (_0xced2xf > 1 && _0xced2x2e(_0xced2x12, 50, 200)) {
            return _0xced2x11[_0xf6f2[79]];
          }
          if (
            (_0xced2xf <= 1 && _0xced2x2e(_0xced2x10, 200, 1000)) ||
            _0xced2x2e(_0xced2x12, 200, 1000)
          ) {
            return _0xced2x11[_0xf6f2[81]];
          }
          return _0xced2x11[_0xf6f2[83]];
        case _0xf6f2[50]:
          if ((_0xced2xf <= 1 && _0xced2x10 <= 1000) || _0xced2x12 <= 50) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (_0xced2xf > 1 && _0xced2x2e(_0xced2x12, 50, 200)) {
            return _0xced2x11[_0xf6f2[77]];
          }
          if (_0xced2xf > 1 && _0xced2x2e(_0xced2x12, 200, 1000)) {
            return _0xced2x11[_0xf6f2[79]];
          }
          if (
            (_0xced2xf <= 1 && _0xced2x2e(_0xced2x10, 1000, 3000)) ||
            (_0xced2xf > 1 && _0xced2x2e(_0xced2x12, 1000, 3000)) ||
            (_0xced2x10 <= 4 && _0xced2x12 > 1000)
          ) {
            return _0xced2x11[_0xf6f2[81]];
          }
          return _0xced2x11[_0xf6f2[83]];
        case _0xf6f2[52]:
          if (_0xced2x10 <= 500 && (_0xced2xf <= 1 || _0xced2x12 <= 200)) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (_0xced2x10 <= 10 && _0xced2x12 > 200) {
            return _0xced2x11[_0xf6f2[77]];
          }
          if (
            (_0xced2x10 > 500 && _0xced2xf <= 1) ||
            (_0xced2xf > 1 && _0xced2x12 > 200 && _0xced2x2e(_0xced2x10, 10, 500))
          ) {
            return _0xced2x11[_0xf6f2[79]];
          }
          {
            return _0xced2x11[_0xf6f2[81]];
          }
        case _0xf6f2[54]:
          if (_0xced2x10 <= 1000 && (_0xced2x12 <= 10000 || _0xced2x10 <= 10)) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (
            (_0xced2x10 > 1000 && _0xced2xf <= 10) ||
            (_0xced2x12 > 10000 && _0xced2x2e(_0xced2x10, 10, 500))
          ) {
            return _0xced2x11[_0xf6f2[77]];
          }
          {
            return _0xced2x11[_0xf6f2[79]];
          }
        case _0xf6f2[57]:
          if (_0xced2xf <= 25) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (_0xced2x12 <= 1000 && _0xced2x2e(_0xced2xf, 25, 100)) {
            return _0xced2x11[_0xf6f2[77]];
          }
          if (
            _0xced2xf > 25 &&
            (_0xced2xf > 100 || _0xced2x12 > 1000) &&
            (_0xced2xf <= 100 || (_0xced2xf <= 350 && _0xced2x12 <= 3500))
          ) {
            return _0xced2x11[_0xf6f2[79]];
          }
          {
            return _0xced2x11[_0xf6f2[81]];
          }
        case _0xf6f2[59]:
          if (_0xced2xf <= 32 || _0xced2x12 <= 1000) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (
            _0xced2xf > 32 &&
            _0xced2x12 > 1000 &&
            (_0xced2xf <= 100 || _0xced2x12 <= 3500)
          ) {
            return _0xced2x11[_0xf6f2[77]];
          }
          if (
            _0xced2xf > 100 &&
            _0xced2x12 > 3500 &&
            (_0xced2xf <= 250 || _0xced2x12 <= 5000)
          ) {
            return _0xced2x11[_0xf6f2[79]];
          }
          {
            return _0xced2x11[_0xf6f2[81]];
          }
        case _0xf6f2[61]:
          if (_0xced2xf <= 25 || _0xced2x12 <= 2000) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (_0xced2x10 <= 10 && _0xced2x12 > 2000) {
            return _0xced2x11[_0xf6f2[77]];
          }
          if (
            _0xced2xf > 25 &&
            _0xced2x12 > 2000 &&
            _0xced2x2e(_0xced2x10, 10, 500)
          ) {
            return _0xced2x11[_0xf6f2[79]];
          }
          {
            return _0xced2x11[_0xf6f2[81]];
          }
        case _0xf6f2[63]:
          if (_0xced2x10 <= 10 || _0xced2xf <= 200 || _0xced2x12 <= 5000) {
            return _0xced2x11[_0xf6f2[75]];
          }
          if (
            _0xced2xf > 200 &&
            _0xced2x12 > 5000 &&
            _0xced2x2e(_0xced2x10, 10, 500)
          ) {
            return _0xced2x11[_0xf6f2[77]];
          }
          {
            return _0xced2x11[_0xf6f2[79]];
          }
      }
    }
    function _0xced2x13(_0xced2x3, _0xced2x6, _0xced2x4, _0xced2x5) {
      var _0xced2x11 = {
        Point5: _0xf6f2[71],
        SEP: _0xf6f2[75],
        Cat1: _0xf6f2[77],
        Cat2: _0xf6f2[79],
        Cat3: _0xf6f2[81],
        Cat4: _0xf6f2[83]
      };
      var _0xced2x14 = {
        SG: _0xf6f2[27],
        VG1: _0xf6f2[48],
        VG2: _0xf6f2[50],
        VL1: _0xf6f2[52],
        VL2: _0xf6f2[54],
        PG1: _0xf6f2[57],
        PG2: _0xf6f2[59],
        PL1: _0xf6f2[61],
        PL2: _0xf6f2[63]
      };
      var _0xced2x15 = false;
      var _0xced2x16 = false;
      var _0xced2x17 = false;
      var _0xced2x18 = false;
      var _0xced2x19 = false;
      var _0xced2x1a = false;
      var _0xced2x1b = _0xced2x1(_0xf6f2[91]);
      var _0xced2x1c = _0xced2x1[_0xf6f2[93]](_0xced2x1b, [], {
        xaxis: {
          transform: function (_0xced2x1d) {
            return Math[_0xf6f2[92]](_0xced2x1d + 0.0001);
          },
          min: 0.1,
          max: 100000
        },
        yaxis: {
          transform: function (_0xced2x1d) {
            return Math[_0xf6f2[92]](_0xced2x1d + 0.0001);
          },
          min: 0.1,
          max: 100000
        }
      });
      var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0, y: 0 });
      var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 0, y: 0 });
      var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 0, y: 0 });
      var _0xced2x21 = _0xced2x1c[_0xf6f2[94]]({ x: 0, y: 0 });
      var _0xced2x22 = _0xced2x1c[_0xf6f2[94]]({ x: 0, y: 0 });
      var _0xced2x23 = [0];
      var _0xced2x24 = [0];
      if (_0xced2x6 == _0xced2x11[_0xf6f2[71]]) {
        _0xced2x15 = true;
      }
      if (_0xced2x6 == _0xced2x11[_0xf6f2[75]]) {
        _0xced2x16 = true;
      }
      if (_0xced2x6 == _0xced2x11[_0xf6f2[77]]) {
        _0xced2x17 = true;
      }
      if (_0xced2x6 == _0xced2x11[_0xf6f2[79]]) {
        _0xced2x18 = true;
      }
      if (_0xced2x6 == _0xced2x11[_0xf6f2[81]]) {
        _0xced2x19 = true;
      }
      if (_0xced2x6 == _0xced2x11[_0xf6f2[83]]) {
        _0xced2x1a = true;
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[27]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 100001],
          [2, 100001],
          [2, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [2, 0.5],
          [2, 25],
          [100, 0.5],
          [2, 0.5]
        ];
        var _0xced2x28 = [
          [2, 25],
          [2, 32],
          [6.25, 32],
          [400, 0.5],
          [100, 0.5],
          [2, 25]
        ];
        var _0xced2x29 = [
          [6.25, 32],
          [93.75, 32],
          [1000, 3],
          [1000, 0.5],
          [400, 0.5],
          [6.25, 32]
        ];
        var _0xced2x2a = [
          [100001, 100001],
          [2, 100001],
          [2, 32],
          [93.75, 32],
          [1000, 3],
          [1000, 0.5],
          [100001, 0.5],
          [100001, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          2,
          10,
          100,
          1000,
          10000,
          [100000, _0xf6f2[96]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          32,
          100,
          1000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 10, y: 2 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 110, y: 2 });
        var _0xced2x21 = _0xced2x1c[_0xf6f2[94]]({ x: 500, y: 2 });
        var _0xced2x22 = _0xced2x1c[_0xf6f2[94]]({ x: 500, y: 30 });
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[48]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 200],
          [1, 200],
          [1, 25],
          [50, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [1, 50],
          [1, 25],
          [50, 0.5],
          [100, 0.5],
          [1, 50]
        ];
        var _0xced2x28 = [
          [1, 200],
          [1, 50],
          [100, 0.5],
          [400, 0.5],
          [1, 200]
        ];
        var _0xced2x29 = [
          [0, 200],
          [1, 200],
          [400, 0.5],
          [2000, 0.5],
          [1, 1000],
          [0, 1000]
        ];
        var _0xced2x2a = [
          [0, 1000],
          [1, 1000],
          [2000, 0.5],
          [100001, 0.5],
          [100001, 100001],
          [0, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          10,
          100,
          1000,
          10000,
          [100000, _0xf6f2[96]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          100,
          200,
          1000,
          10000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 47, y: 2 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 112, y: 2 });
        var _0xced2x21 = _0xced2x1c[_0xf6f2[94]]({ x: 495, y: 2 });
        var _0xced2x22 = _0xced2x1c[_0xf6f2[94]]({ x: 2900, y: 2 });
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[50]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 1000],
          [1, 1000],
          [1, 50],
          [100, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [1, 200],
          [1, 50],
          [100, 0.5],
          [400, 0.5],
          [1, 200]
        ];
        var _0xced2x28 = [
          [1, 1000],
          [1, 200],
          [400, 0.5],
          [2000, 0.5],
          [1, 1000]
        ];
        var _0xced2x29 = [
          [0, 1000],
          [1, 1000],
          [2000, 0.5],
          [100001, 0.5],
          [100001, 4],
          [750, 4],
          [1, 3000],
          [0, 3000]
        ];
        var _0xced2x2a = [
          [0, 3000],
          [1, 3000],
          [750, 4],
          [100001, 4],
          [100001, 100001],
          [0, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          10,
          100,
          1000,
          10000,
          [100000, _0xf6f2[96]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          100,
          200,
          1000,
          10000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 120, y: 2 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 500, y: 2 });
        var _0xced2x21 = _0xced2x1c[_0xf6f2[94]]({ x: 3000, y: 2 });
        var _0xced2x22 = _0xced2x1c[_0xf6f2[94]]({ x: 480, y: 30 });
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[52]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 500],
          [1, 500],
          [1, 200],
          [400, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [20, 10],
          [400, 0.5],
          [100001, 0.5],
          [100001, 10],
          [20, 10]
        ];
        var _0xced2x28 = [
          [1, 500],
          [0, 500],
          [0, 100001],
          [1, 100001],
          [1, 200],
          [20, 10],
          [100001, 10],
          [100001, 500],
          [1, 500]
        ];
        var _0xced2x29 = [
          [1, 100001],
          [1, 500],
          [100001, 500],
          [100001, 100001],
          [1, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          10,
          100,
          1000,
          10000,
          [100000, _0xf6f2[96]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          100,
          500,
          1000,
          10000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 500, y: 2 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 4, y: 350 });
        var _0xced2x21 = _0xced2x1c[_0xf6f2[94]]({ x: 4, y: 1200 });
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[54]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 1000],
          [10, 1000],
          [1000, 10],
          [100001, 10],
          [100001, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [10, 1000],
          [10, 100001],
          [0, 100001],
          [0, 1000],
          [10, 1000],
          [1000, 10],
          [100001, 10],
          [100001, 500],
          [20, 500],
          [10, 1000]
        ];
        var _0xced2x28 = [
          [10, 100001],
          [10, 1000],
          [20, 500],
          [100001, 500],
          [100001, 100001],
          [10, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          10,
          100,
          1000,
          10000,
          [100000, _0xf6f2[96]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          100,
          500,
          1000,
          10000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 10, y: 2000 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 25, y: 2000 });
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[57]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 100001],
          [25, 100001],
          [25, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [25, 0.5],
          [25, 40],
          [100, 10],
          [100, 0.5],
          [25, 0.5]
        ];
        var _0xced2x28 = [
          [25, 100001],
          [25, 40],
          [100, 10],
          [100, 0.5],
          [350, 0.5],
          [350, 10],
          [100, 35],
          [100, 100001],
          [25, 100001]
        ];
        var _0xced2x29 = [
          [100, 100001],
          [100, 35],
          [350, 10],
          [350, 0.5],
          [100001, 0.5],
          [100001, 100001],
          [100, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          10,
          25,
          100,
          350,
          1000,
          [100000, _0xf6f2[99]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          100,
          1000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 60, y: 2 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 200, y: 2 });
        var _0xced2x21 = _0xced2x1c[_0xf6f2[94]]({ x: 500, y: 2 });
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[59]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 100001],
          [32, 100001],
          [32, 31.25],
          [2000, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [32, 100001],
          [32, 31.25],
          [2000, 0.5],
          [7000, 0.5],
          [100, 35],
          [100, 100001],
          [32, 100001]
        ];
        var _0xced2x28 = [
          [100, 100001],
          [100, 35],
          [7000, 0.5],
          [10000, 0.5],
          [250, 20],
          [250, 100001],
          [100, 100001]
        ];
        var _0xced2x29 = [
          [250, 100001],
          [250, 20],
          [10000, 0.5],
          [100001, 0.5],
          [100001, 100001],
          [250, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          10,
          32,
          100,
          250,
          1000,
          10000,
          [100000, _0xf6f2[99]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          100,
          1000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 60, y: 110 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 200, y: 110 });
        var _0xced2x21 = _0xced2x1c[_0xf6f2[94]]({ x: 500, y: 110 });
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[61]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 100001],
          [25, 100001],
          [25, 80],
          [4000, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [100001, 0.5],
          [4000, 0.5],
          [200, 10],
          [100001, 10]
        ];
        var _0xced2x28 = [
          [100001, 10],
          [200, 10],
          [25, 80],
          [25, 500],
          [100001, 500]
        ];
        var _0xced2x29 = [
          [100001, 500],
          [25, 500],
          [25, 100001],
          [100001, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          10,
          25,
          100,
          1000,
          10000,
          [100000, _0xf6f2[99]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          100,
          500,
          1000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 4500, y: 3 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 4300, y: 80 });
        var _0xced2x21 = _0xced2x1c[_0xf6f2[94]]({ x: 4100, y: 5000 });
      }
      if (_0xced2x3 == _0xced2x14[_0xf6f2[63]]) {
        var _0xced2x25 = [
          [0, 0.5],
          [100001, 0.5]
        ];
        var _0xced2x26 = [
          [0, 100001],
          [200, 100001],
          [200, 25],
          [500, 10],
          [100001, 10],
          [100001, 0.5],
          [0, 0.5]
        ];
        var _0xced2x27 = [
          [200, 500],
          [200, 25],
          [500, 10],
          [100001, 10],
          [100001, 500],
          [200, 500]
        ];
        var _0xced2x28 = [
          [100001, 100001],
          [200, 100001],
          [200, 500],
          [100001, 500],
          [100001, 100001]
        ];
        var _0xced2x23 = [
          [0.1, _0xf6f2[95]],
          1,
          10,
          100,
          1000,
          10000,
          [100000, _0xf6f2[99]]
        ];
        var _0xced2x24 = [
          [0.5, _0xf6f2[97]],
          1,
          10,
          100,
          500,
          1000,
          [100000, _0xf6f2[98]]
        ];
        var _0xced2x1e = _0xced2x1c[_0xf6f2[94]]({ x: 0.5, y: 30 });
        var _0xced2x1f = _0xced2x1c[_0xf6f2[94]]({ x: 4500, y: 80 });
        var _0xced2x20 = _0xced2x1c[_0xf6f2[94]]({ x: 4300, y: 5000 });
      }
      var _0xced2x2b = [[_0xced2x4, _0xced2x5]];
      var _0xced2x2c = [
        {
          data: _0xced2x2a,
          lines: { show: true, fill: _0xced2x1a, fillColor: _0xf6f2[100] },
          color: _0xf6f2[101]
        },
        {
          data: _0xced2x29,
          lines: { show: true, fill: _0xced2x19, fillColor: _0xf6f2[100] },
          color: _0xf6f2[101]
        },
        {
          data: _0xced2x28,
          lines: { show: true, fill: _0xced2x18, fillColor: _0xf6f2[100] },
          color: _0xf6f2[101]
        },
        {
          data: _0xced2x27,
          lines: { show: true, fill: _0xced2x17, fillColor: _0xf6f2[100] },
          color: _0xf6f2[101]
        },
        {
          data: _0xced2x26,
          lines: { show: true, fill: _0xced2x16, fillColor: _0xf6f2[100] },
          color: _0xf6f2[101]
        },
        {
          data: _0xced2x25,
          lines: { show: true, fill: _0xced2x15, fillColor: _0xf6f2[100] },
          color: _0xf6f2[101]
        },
        {
          data: _0xced2x2b,
          points: { show: true, radius: 6, fillColor: _0xf6f2[102] },
          color: _0xf6f2[101]
        }
      ];
      var _0xced2x2d = {
        xaxis: {
          transform: function (_0xced2x1d) {
            return Math[_0xf6f2[92]](_0xced2x1d + 0.0001);
          },
          min: 0.1,
          max: 100000,
          ticks: _0xced2x23,
          tickLength: 0
        },
        yaxis: {
          transform: function (_0xced2x1d) {
            return Math[_0xf6f2[92]](_0xced2x1d + 0.0001);
          },
          min: 0.1,
          max: 100000,
          ticks: _0xced2x24,
          tickLength: 0
        }
      };
      _0xced2x1c = _0xced2x1[_0xf6f2[93]](_0xced2x1b, _0xced2x2c, _0xced2x2d);
      if (_0xced2x1e[_0xf6f2[103]] > 0) {
        _0xced2x1b[_0xf6f2[108]](
          _0xf6f2[104] +
            _0xced2x1e[_0xf6f2[103]] +
            _0xf6f2[105] +
            _0xced2x1e[_0xf6f2[106]] +
            _0xf6f2[107]
        );
      }
      if (_0xced2x1f[_0xf6f2[103]] > 0) {
        _0xced2x1b[_0xf6f2[108]](
          _0xf6f2[104] +
            _0xced2x1f[_0xf6f2[103]] +
            _0xf6f2[105] +
            _0xced2x1f[_0xf6f2[106]] +
            _0xf6f2[109]
        );
      }
      if (_0xced2x20[_0xf6f2[103]] > 0) {
        _0xced2x1b[_0xf6f2[108]](
          _0xf6f2[104] +
            _0xced2x20[_0xf6f2[103]] +
            _0xf6f2[105] +
            _0xced2x20[_0xf6f2[106]] +
            _0xf6f2[110]
        );
      }
      if (_0xced2x21[_0xf6f2[103]] > 0) {
        _0xced2x1b[_0xf6f2[108]](
          _0xf6f2[104] +
            _0xced2x21[_0xf6f2[103]] +
            _0xf6f2[105] +
            _0xced2x21[_0xf6f2[106]] +
            _0xf6f2[111]
        );
      }
      if (_0xced2x22[_0xf6f2[103]] > 0) {
        _0xced2x1b[_0xf6f2[108]](
          _0xf6f2[104] +
            _0xced2x22[_0xf6f2[103]] +
            _0xf6f2[105] +
            _0xced2x22[_0xf6f2[106]] +
            _0xf6f2[112]
        );
      }
    }
    function _0xced2x2e(_0xced2x2f, _0xced2x30, _0xced2x31) {
      return _0xced2x2f > _0xced2x30 && _0xced2x2f <= _0xced2x31;
    }
    var _0xced2x32 = _0xced2x1(_0xf6f2[113]);
  });

}

}