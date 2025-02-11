let modInfo = {
	name: "ExpantaNum?",
	id: "Crazy",
	author: "Maple_White",
	pointsName: "未知",
	discordName: "",
	discordLink: "",
	initialStartPoints: new ExpantaNum (0), // Used for hard resets and new players
	
	offlineLimit: 10,  // In hours
}

// Set your version in num and name
let VERSION = {
	num: "0.3.2",
	name: "“三”",
}

let changelog = `<h1>更新记录:</h1><br>
	<h3>v0.1</h3><br>
		- 添加膨胀层级.<br>
	<h3>v0.2</h3><br>
	    - 添加膨胀^2层级.<br>
	<h3>v0.2.1</h3><br>
	    - 数值修改.<br>
	<h3>v0.3</h3><br>
	    - 添加膨胀^3层级.<br>
	<h3>v0.3.1</h3><br>
	    - 更改层级3的里程碑获取方式.<br>
	<h3>v0.3.1.1</h3><br>
		- 添加了一点点小东西.<br>
	<h3>v0.3.1.2</h3><br>
	    - 添加快捷键(抱歉现在才来，不要骂了不要骂了.jpg).<br>
	<h3>v0.3.2</h3><br>
		- 添加6个里程碑，1个可购买.<br>`

let winText = `恭喜通关!您已经完成了这次更新的内容!当然,你继续玩下去也可以,接下来的更新会按照上版本的结尾数值来更新。至于更新嘛...咕咕咕?`

// If you add new functions anywhere inside of a layer, and those functions have an effect when called, add them here.
// (The ones here are examples, all official functions are already taken care of)
var doNotCallTheseFunctionsEveryTick = ["blowUpEverything"]

function getStartPoints(){
    return new ExpantaNum(modInfo.initialStartPoints)
}

// Determines if it should show points/sec
function canGenPoints(){
	return true
}

// Calculate points/sec!
function getPointGen() {
	if(!canGenPoints()) return new ExpantaNum(0)
	let gain = new ExpantaNum(1)
	if (hasUpgrade('a',11)) gain = gain.mul(10)
	if (hasUpgrade('a',12)) gain = gain.mul(40)
	if (hasUpgrade('a',13)) gain = gain.mul(player.points.add(1).pow(0.5))
	if (hasUpgrade('a',14)) gain = gain.mul(11.11)
	if (hasUpgrade('a',15)) gain = gain.mul(111.1)
	if (hasUpgrade('a',16)) gain = gain.mul(1111)
	if (hasUpgrade('a',21)) gain = gain.mul(player.a.points.add(1).pow(0.25))
	if (hasUpgrade('a',24)) gain = gain.mul(player.a.alpha.add(1).pow(0.8))
	if (hasUpgrade('a',35)) gain = gain.mul(1e10)
	if (hasUpgrade('a',56)) gain = gain.mul(player.a.beta.add(1).pow(0.25))
	if (hasUpgrade('a',61)) gain = gain.mul(player.points.add(1).pow(0.025))
	if (hasUpgrade('a',74)) gain = gain.mul(1e5)
	if (hasUpgrade('a',96)) gain = gain.mul(player.points.add(1).pow(0.5))
	if (hasMilestone('b',1)) gain = gain.mul(player.b.points.add(1).pow(3.5))
	if (hasMilestone('b',4)) gain = gain.mul(1e100)
	if (hasMilestone('b',15)) gain = gain.pow(1.05)
	if (hasMilestone('b',19)) gain = gain.pow(player.points.add(1).pow(1e-6))
	if (getBuyableAmount('c',21).gte(1)) gain = gain.mul(new ExpantaNum(1e150).pow(getBuyableAmount('c',21)))
	if (hasMilestone('c',17)) gain = gain.pow(1.015)
	gain = softcap(gain,new ExpantaNum('1e1300'),0.9)
	gain = softcap(gain,new ExpantaNum('1e1800'),0.75)
	gain = softcap(gain,new ExpantaNum('1e2900'),0.5)
	gain = softcap(gain,new ExpantaNum('1e40000'),0.2)
	return gain
}

// You can add non-layer related variables that should to into "player" and be saved here, along with default values
function addedPlayerData() { return {
}}

// Display extra things at the top of the page
var displayThings = [
	function(){
		if (player.points.gte('1e40000'))
		return "由于未知有点爆炸了(1e40000),未知获取受到软上限阻碍，目前软上限效果:^0.2"
		if (player.points.gte('1e2900'))
		return "由于未知有点过于爆炸多了(1e2900),未知获取受到软上限阻碍,目前软上限效果:^0.5"
		if (player.points.gte('1e1800'))
		return "由于未知过多(1e1800),未知获取受到软上限阻碍,目前软上限效果:^0.75"
		if (player.points.gte('1e1300'))
	    return "由于未知过多(1e1300),未知获取受到软上限阻碍,目前软上限效果:^0.9"
	},
	function(){
		return "<h2>目前结局:获得层级3 3UG26升级并累计获得1.25e9膨胀点^3"
	},
	function(){
		return "<h3>如果到达结局时卡住了按一下'i'就能进入结局界面"
	}
]

// Determines when the game "ends"
function isEndgame() {
	return hasUpgrade('c',26) && player.c.total.gte(1.25e9)
}



// Less important things beyond this point!

// You can change this if you have things that can be messed up by long tick lengths
function maxTickLength() {
	return(3600) // Default is 1 hour which is just arbitrarily large
}

// Use this if you need to undo inflation from an older version. If the version is older than the version that fixed the issue,
// you can cap their current resources with this.
function fixOldSave(oldVersion){
}