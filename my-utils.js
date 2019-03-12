function mergeTypeArrays(a, b) {
    var result = new a.constructor(a.length + b.length);
    result.set(a);
    result.set(b, a.length);

    return result;
}

function printHighSpeedPackage(highspeed_package)
{
    for (var i = 0; i < highspeed_package.length; i++)
    {
        var s = highspeed_package[i].toString(16);
        if (s.length == 1)
        {
            s = "0" + s;
        }
        process.stdout.write(s);
        if ((i + 1) % 4 == 0)
        {
            console.log();
        }
    }
    console.log();
}

module.exports = 
{
    mergeTypeArrays : mergeTypeArrays,
    printHighSpeedPackage : printHighSpeedPackage
};