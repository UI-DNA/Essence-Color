let ReferenceAdaptatioMatrixn = {


    // get_Bradford_AdaptatioMatrixn(ReferenceWhite.D50, ReferenceWhite.D65)
    D65_to_D50: [1.0478112, 0.0228866, -0.0501270,
        0.0295424, 0.9904844, -0.0170491,
        - 0.0092345, 0.0150436, 0.7521316
    ],


    // get_Bradford_AdaptatioMatrixn(ReferenceWhite.D65, ReferenceWhite.D50)
    D50_to_D65: [0.9555766, -0.0230393, 0.0631636,
        -0.0282895, 1.0099416, 0.0210077,
        0.0122982, -0.0204830, 1.3299098
    ],


};


export {ReferenceAdaptatioMatrixn}
