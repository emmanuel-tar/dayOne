let count = 0
document.getElementById("decreased_count").onclick = function() {
    count -= 1
    document.getElementById("countlabel").innerHTML = count
}

document.getElementById("reset_count").onclick = function() {
    count = 0
    document.getElementById("countlabel").innerHTML = count
}
document.getElementById("increased_count").onclick = function() {
count +=1
document.getElementById("countlabel").innerHTML = count
}