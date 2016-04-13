function A(startX, startY, size) {
    diagnalRight(startX, startY)
    diagnalLeft(startX, startY)
    crossBarX(startX,startY+letterHmid
        )

}

function C(startX, startY, size) {
  semi(startX+30, startY+(30), -90, "right",1.5);

}
function E(startX, startY, size) {

    leftBar(startX, startY);
    topBar(startX, startY);
    crossBarwiggle(startX, startY);
    bottomBar(startX, startY);
    vertExtrude(startX, startY)
}



function F(startX, startY, size) {

    leftBar(startX, startY);
    topBar(startX, startY);
    crossBarwiggle(startX, startY);
    // bottomBar(startX, startY);
    vertExtrude(startX, startY)
}


function H(startX, startY, size) {

    leftBarDoubleV(startX, startY);
    rightBar(startX, startY)
    crossBar(startX, startY);
    vertExtrude(startX, startY)

}

function I(startX, startY, size) {

    leftBarDoubleV(startX + letterWmid, startY);
    topBar(startX, startY);
    bottomBar(startX, startY);
}

function L(startX, startY, size) {

    leftBarDoubleV(startX, startY);
    bottomBar(startX, startY);
    vertExtrude(startX, startY)
}


function N(startX, startY, size) {

    leftBarDoubleV(startX, startY);
    rightBar(startX, startY)
    // crossBar(startX, startY);
    vertExtrude(startX, startY)

}

function O(startX, startY, size) {
        HalftoneDots(startX + letterWmid, startY + letterWmid*1.4,letterW*1.4);

}

function S(startX, startY,size) {
    semi(startX, startY, 0, "top",1);
    semi(startX, startY, 180, "bottom",1);
    semi(startX, startY, 90, "left",1);
    semi(startX, startY, -90, "right",1);
}

function U(startX, startY, size) {
    semi(startX, startY, 180, "bottom",1);
    leftBarThreeQuarters(startX, startY);
    leftBarThreeQuarters(startX + letterW - letterThickness, startY);

}


function space(startX, startY, size) {

}

function P(startX, startY, size) {
    HalftoneDots(startX + letterWmid, startY + letterWmid,letterW);

    leftBarDoubleV(startX, startY);
    vertExtrude(startX, startY)

}

function R(startX, startY, size) {
    HalftoneDots(startX + letterWmid, startY + letterWmid,letterW);

    leftBarDoubleV(startX, startY);
    diagnalBar(startX, startY)
    vertExtrude(startX, startY)

}



function T(startX, startY, size) {

    leftBar(startX + letterWmid, startY);
    topBar(startX, startY);
}
