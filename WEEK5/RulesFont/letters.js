function S(startX, startY,size) {
    semi(startX, startY, 0, "top");
    semi(startX, startY, 180, "bottom");
    semi(startX, startY, 90, "left");
    semi(startX, startY, -90, "right");
}

function U(startX, startY, size) {
    semi(startX, startY, 180, "bottom");
    leftBarThreeQuarters(startX, startY);
    leftBarThreeQuarters(startX + letterW - letterThickness, startY);

}

function L(startX, startY, size) {

    leftBar(startX, startY);
    bottomBar(startX, startY);
    vertExtrude(startX, startY)
}

function space(startX, startY, size) {

}

function E(startX, startY, size) {

    leftBar(startX, startY);
    topBar(startX, startY);
    crossBar(startX, startY);
    bottomBar(startX, startY);
    vertExtrude(startX, startY)
}

function H(startX, startY, size) {

    leftBar(startX, startY);
    rightBar(startX, startY)
    crossBar(startX, startY);
    vertExtrude(startX, startY)

}

function R(startX, startY, size) {
    HalftoneDots(startX + letterWmid, startY + letterWmid);

    leftBar(startX, startY);
    diagnalBar(startX, startY)
    vertExtrude(startX, startY)

}

function T(startX, startY, size) {

    leftBar(startX + letterWmid, startY);
    topBar(startX, startY);
}
