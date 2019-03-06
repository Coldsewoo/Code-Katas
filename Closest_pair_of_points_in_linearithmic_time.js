"use strict"

// 3 kyu (first time!)

/*
Given a number of points on a plane, your task is to find two points with the smallest distance between them in linearithmic O(n log n) time.
[
  [2,2], // A
  [2,8], // B
  [5,5], // C
  [6,3], // D
  [6,7], // E
  [7,4], // F
  [7,9]  // G
]
=> closest pair is: [[6,3],[7,4]] or [[7,4],[6,3]]
(both answers are valid)
The two points that are closest to each other are D and F.
Expected answer should be an array with both points in any order.
Goal
The goal is to come up with a function that can find two closest points for any arbitrary array of points, in a linearithmic time.
Note: for compatibility reasons, your function will be called with one additional parameter, a distance calculation function. However you can completely ignore it, and you do not have to account for it - it's there only to keep compatibility with old solutions.
*/

function closestPair(pointX) {
    var pointY = JSON.parse(JSON.stringify(pointX))
    pointX.sort((a, b) => a[0] - b[0])
    pointY.sort((a, b) => a[1] - b[1])
    return RCP(pointX, pointY)


    function RCP(Px, Py) {
        if (Px.length <= 3) {
            return nSquareSearch(Px);
        }

        else {
            let midIndex = (Px.length) / 2
            var Lx = Px.reduce((p, c, i) => {
                if (i < midIndex) p.push(c)
                return p
            }, [])
            var Rx = Px.reduce((p, c, i) => {
                if (i >= midIndex) p.push(c)
                return p
            }, [])

            var m = (Lx[Lx.length - 1][0] + Rx[0][0]) / 2
            // var Ly = Py.reduce((p, c, i) => {
            //     if (i < midIndex) p.push(c)
            //     return p
            // }, [])
            // var Ry = Py.reduce((p, c, i) => {
            //     if (i >= midIndex) p.push(c)
            //     return p
            // }, [])
            var Ly = Lx.map(e => e).sort((a, b) => a[1] - b[1]) //?
            var Ry = Rx.map(e => e).sort((a, b) => a[1] - b[1]) //?
            var pL = RCP(Lx, Ly)
            var qL = RCP(Rx, Ry)
            var delta = Math.min(dist(pL[0], pL[1]), dist(qL[0], qL[1]))
            let B = Py.reduce((p, c) => {
                if (Math.abs(c[0] - m) < delta) p.push(c)
                return p;
            }, [])
            B.sort((a, b) => a[1] - b[1])

            if (B.length <= 1) {
                if (dist(pL[0], pL[1]) <= dist(qL[0], qL[1])) return pL;
                else return qL;
            }
            else {
                var pqTemp = [[-Infinity, -Infinity], [Infinity, Infinity]]
                var len = B.length;
                for (let i = 0; i < len; i++) {
                    let tempIndex = 15 - i < len ? 15 - i : len
                    for (let j = i + 1; j < tempIndex; j++) {
                        if (dist(B[i], B[j]) < dist(pqTemp[0], pqTemp[1])) pqTemp = [B[i], B[j]]
                    }
                }
                if (dist(pqTemp[0], pqTemp[1]) < delta) return pqTemp;
                else if (dist(pL[0], pL[1]) <= dist(qL[0], qL[1])) return pL;
                else return qL;
            }
        }
    }
}

function nSquareSearch(points) {
    var result = [Infinity]
    for (let i = 0; i < points.length - 1; i++) {
        for (let j = i + 1; j < points.length; j++) {
            if (dist(points[i], points[j]) < result[0])
                result = [dist(points[i], points[j]), points[i], points[j]]
        }
    }
    return [result[1], result[2]];
}

function dist(pointA, pointB) {
    return Math.sqrt(Math.pow(pointA[1] - pointB[1], 2) + Math.pow(pointA[0] - pointB[0], 2))
}

var points = [[3220.0084161473164, -3055.6904902964043],
[4584.059675312235, -3767.8233614856854],
[5265.84819406118, -1788.9565465637943],
[3422.799662496463, -3831.250147276546],
[2839.386113108585, -3942.4913500649054],
[4402.900989857784, -2329.249404357191],
[3883.6797516942574, -3726.5110731256464],
[3509.730924045993, -4427.475569297239],
[3810.2291706115507, -1865.8129793351338],
[5325.983489142429, -2167.247024415051],
[3395.6000048974884, -2457.0057738743726],
[5103.398230303436, -2999.738259442343],
[5264.956303776843, -2099.9172189314045],
[4456.767272495296, -2986.229518041524],
[3866.6101453267784, -2582.3367960185997],
[4224.41184635031, -4188.4330729588555],
[4378.7144620394565, -1692.706861997029],
[2809.2502871362885, -4480.974718149929],
[3212.1940707859394, -1931.7571575241982],
[5464.706666416933, -4306.870628437972],
[2725.1166580179206, -2421.9611002390993],
[4785.388914515683, -4335.551565118262],
[5171.603454164078, -3480.1060404749596],
[2758.438979230058, -3212.2153969115384],
[2503.552815492598, -1842.4350448330492],
[4034.6878899860585, -3106.0815313588046]]

closestPair(points) //? 

// [[57.511041844674224, 61.0136695849246], [58.15905212882406, 61.26620523674544]]', instead got: '[[54.127532799969465, 44.186286440667836], [54.27752580497456, 42.19730335320518]]'

dist([57.511041844674224, 61.0136695849246], [58.15905212882406, 61.26620523674544]) //?
dist([54.127532799969465, 44.186286440667836], [54.27752580497456, 42.19730335320518]) //?

