"use strict"

// 6 kyu

/*
You've been working with a lot of different file types recently as your interests have broadend.
But what file types are you using the most? With this question in mind we look at the following problem.
Given a List/Array of Filenames (strings) files return a List/Array of string(s) contatining the most common extension(s). If there is a tie, return all tied extensions sorted first numerically then alphabetically.
Important Info:
Don't forget, you've been working with a lot of different file types, so expect some interesting extensions/file names/lengths in the random tests.
Filenames and extensions will contain letters (case sensitive), and numbers.
If a file has multiple extensions (ie: mysong.mp3.als) only count the the last extension (.als)
*/

function solve(files) {
    const filetypes = /\.[a-zA-Z0-9]+$/
    files = files.map(e => filetypes.exec(e)[0])
        .reduce((p, c) => {
            p[c] = p[c] > 0 ? p[c] + 1 : 1
            return p
        }, {})
    var filesArr = []
    for (let key in files) filesArr.push([key, files[key]])
    filesArr = filesArr.sort((a, b) => b[1] - a[1])
    var most = filesArr[0][1]
    return filesArr.reduce((p, c) => {
        if (c[1] == most) p.push(c[0]);
        return p
    }, [])

}

solve(['direful.pr', 'festive.html', 'historical.wav', 'holistic.mp3', 'impossible.jar', 'gentle.cpp', 'gleaming.xml', 'inconclusive.js', 'erect.jar', 'befitting.mp3', 'brief.wp', 'beautiful.jar', 'energetic.pt', 'careful.wp', 'defective.cpp', 'icky.wav', 'gorgeous.txt', 'good.pt', 'fat.pt', 'bored.als', 'adaptable.cpp', 'fumbling.exe', 'grieving.wp', 'efficient.wav', 'fearful.xml', 'damp.html', 'erect.exe', 'annoyed.xml', 'elderly.ala', 'far-flung.txt', 'careful.mp3', 'actually.pt', 'cynical.ala', 'complex.exe', 'extra-small.pt', 'enchanted.ala', 'amazing.html', 'bashful.h', 'hallowed.html', 'entertaining.html', 'bad.js', 'illegal.maya', 'deadpan.html', 'furtive.wp', 'hanging.css', 'drunk.py', 'capricious.wav', 'damaging.Ue4', 'cool.Ue4', 'ambitious.css', 'fortunate.wp', 'electric.mp3', 'crowded.txt', 'cooperative.html', 'graceful.pt', 'aboard.pt', 'exclusive.als', 'glossy.css', 'fluffy.pt', 'cluttered.txt', 'halting.cpp', 'glib.cpp', 'aback.pr', 'cynical.Ue4', 'chilly.xml', 'hideous.ala', 'finicky.txt', 'feigned.ala', 'better.Ue4', 'dear.py', 'available.xml', 'easy.pr', 'fine.mp3', 'cowardly.jar', 'incredible.css', 'adhesive.exe', 'energetic.mp3', 'harmonious.exe', 'general.als', 'condemned.als', 'flawless.als', 'curvy.h', 'ambitious.mp3', 'disillusioned.xml', 'bitter.h', 'hanging.wp', 'certain.cpp', 'flashy.html', 'cuddly.pr', 'cagey.Ue4', 'extra-small.pr', 'amuck.cpp', 'direful.html', 'delightful.als', 'helpless.h', 'foamy.mp3', 'enthusiastic.maya', 'good.maya', 'adhesive.css', 'imperfect.pr', 'bent.cpp', 'exultant.zbrush', 'adorable.mp3', 'clammy.maya', 'gaudy.pt', 'blushing.css', 'cuddly.Ue4', 'curved.py', 'boring.html', 'broken.txt', 'daily.jar', 'giddy.xml', 'curved.css', 'future.maya', 'graceful.css', 'guiltless.maya', 'gentle.cpp', 'few.css', 'calculating.txt', 'clear.pr', 'grey.py', 'entertaining.ala', 'elfin.txt', 'excited.js', 'abject.zbrush', 'best.js', 'boundless.wav', 'hurried.ala', 'delirious.cpp']
) //?