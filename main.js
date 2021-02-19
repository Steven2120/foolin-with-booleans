/********************
 * YOUR CODE BELOW! *
 ********************/
function moreThan5(num) {
  return num > 5;
}

function isNewTopScore(scr, topScr) {
  return scr > topScr;
}

function isInDanger(grd) {
  return grd >= 60 && grd <= 71;
}

function isCoasting(grd1) {
  return grd1 >= 72 && grd1 <= 83;
}

function isSucceeding(grd2) {
  return grd2 >= 84 && grd2 <= 92;
}

function isFailing(grd3) {
  return grd3 < 60;
}

function isAcing(grd4) {
  return grd4 > 92;
}

function isStudent(str) {
  return str ==="student";
}

function isTeacher(str1) {
  return str1 === "teacher";
}

function isAdmin(str2) {
  return str2 === "admin";
}

function isElementary(str3) {
  return str3 === "elementary";
}

function areDifferentPeople(str4, str5) {
  return str4 !== str5;
}

function isMiddleSchoolTeacher(str6, lvl) {
  return str6 === "teacher" && lvl >= 6 && lvl <= 8;
}

function notAnElementarySchoolAdministrator(str7, str8) {
  return str7 !== "elementary" || str8 !== "admin";
} 




/********************************************************************************************
 * CODE BELOW IS FOR EXPORTING THE VARIABLES AND FUNCTIONS YOU WROTE ABOVE TO MAIN.TEST.JS. *
 *                              THIS IS FOR INTERNAL USE ONLY                               *
 *                          DON'T ADD TO OR CHANGE ANYTHING BELOW!                          *
 ********************************************************************************************/


if (typeof moreThan5 === 'undefined') {
  moreThan5 = undefined;
}

if (typeof isNewTopScore === 'undefined') {
  isNewTopScore = undefined;
}

if (typeof isInDanger === 'undefined') {
  isInDanger = undefined;
}

if (typeof isCoasting === 'undefined') {
  isCoasting = undefined;
}

if (typeof isSucceeding === 'undefined') {
  isSucceeding = undefined;
}

if (typeof isFailing === 'undefined') {
  isFailing = undefined;
}

if (typeof isAcing === 'undefined') {
  isAcing = undefined;
}

if (typeof isStudent === 'undefined') {
  isStudent = undefined;
}

if (typeof isTeacher === 'undefined') {
  isTeacher = undefined;
}

if (typeof isAdmin === 'undefined') {
  isAdmin = undefined;
}

if (typeof isElementary === 'undefined') {
  isElementary = undefined;
}

if (typeof areDifferentPeople === 'undefined') {
  areDifferentPeople = undefined;
}

if (typeof notAnElementarySchoolAdministrator === 'undefined') {
  notAnElementarySchoolAdministrator = undefined;
}

if (typeof isMiddleSchoolTeacher === 'undefined') {
  isMiddleSchoolTeacher = undefined;
}


module.exports = {
  moreThan5,
  isNewTopScore,
  isInDanger,
  isCoasting,
  isSucceeding,
  isFailing,
  isAcing,
  isStudent,
  isTeacher,
  isAdmin,
  isElementary,
  areDifferentPeople,
  notAnElementarySchoolAdministrator,
  isMiddleSchoolTeacher,
}
