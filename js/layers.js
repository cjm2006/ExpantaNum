addLayer("a", { //这是代码中的节点代码 例如player.p可以调用该层级的数据 尽量使用顺手的字母什么的 不建议数字开头
    symbol: "</sup>1", // 这是节点上显示的字母
    position: 0, // 节点顺序
    startData() { return {
        unlocked: true, //是否开始就解锁
		points:new ExpantaNum(0),
		alpha:new ExpantaNum(0),
		alphas:new ExpantaNum(0),
		beta:new ExpantaNum(0),
		betas:new ExpantaNum(0),
		getbeta:false,
		gamma:new ExpantaNum(0),
		gammas:new ExpantaNum(0),
		getgamma:false,
		delta:new ExpantaNum(0),
		deltas:new ExpantaNum(0),
		getdelta:false,
		epsilon:new ExpantaNum(0),
		epsilons:new ExpantaNum(0),
		getepsilon:false,
    }},
    color: "lime",
    resource: "膨胀点", // 重置获得的资源名称
    type: "normal", // normal: cost to gain currency depends on amount gained. static: cost depends on how much you already have
    requires:new ExpantaNum(10),
    exponent:1,
    baseAmount(){return player.points},//基础资源数量
    baseResource:"未知",//基础资源名称
    gainMult() { // 资源获取数量倍率
        mult = new ExpantaNum(1)
		if (hasUpgrade('a',32) && player.a.getbeta) mult = mult.mul(player.a.beta.add(1).pow(0.65))
		if (hasUpgrade('a',51)) mult = mult.mul(player.a.alpha.add(1).pow(0.1))
		if (hasUpgrade('a',74)) mult = mult.mul(1e5)
		if (player.b.points.gte(1)) mult = mult.mul(player.b.points.add(1).pow(3.5))
		if (hasMilestone('b',3)) mult = mult.mul(1e40)
		if (hasMilestone('b',23)) mult = mult.mul(player.b.eta.add(1).pow(0.65))
		if (getBuyableAmount('c',11).gte(1)) mult = mult.mul(new ExpantaNum(1e7).pow(getBuyableAmount('c',11)))
		if (hasUpgrade('c',24)) mult=mult.mul(new ExpantaNum(5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21))))
        return mult
    },
	passiveGeneration(){
		if (hasUpgrade('a',46)){
			return 1
		}
		if (hasUpgrade('a',22)){
			return 0.1
		}
		return 0
	},
    gainExp() { // 资源获取指数加成(与exponent相乘)
        var exp = new ExpantaNum(1)
		if (hasUpgrade('a',23)) exp = new ExpantaNum(1.2)
        return exp
    },
    row: 1, // Row the layer is in on the tree (0 is the first row)  QwQ:1也可以当第一排
	hotkeys:[
		{key: "a", description: "a: 进行层级1重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
    layerShown(){return true},
	doReset(resettingLayer){
	    let keep = [];
		    var b1 = hasMilestone('b',2)
			var b2 = hasMilestone('b',3)
			var b3 = hasMilestone('b',4)
			var b4 = hasMilestone('b',5)
			var b5 = hasMilestone('b',6)
			var b6 = hasMilestone('b',7)
			var b7 = hasMilestone('b',8)
			var b8 = hasMilestone('b',9)
			var b9 = hasMilestone('b',10)
			var b10 = hasMilestone('b',11)
			var c1 = hasMilestone('c',0)
		if (layers[resettingLayer].row > this.row){
		    layerDataReset(this.layer,keep)
		if (b1 || c1) player.a.upgrades = [11,12,13,14,15,16];
		if (b2 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26];
		if (b3 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36];
		if (b4 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46];
		if (b5 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56];
		if (b6 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66];
		if (b7 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66,71,72,73,74,75,76];
		if (b8 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66,71,72,73,74,75,76,81,82,83,84,85,86];
		if (b9 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66,71,72,73,74,75,76,81,82,83,84,85,86,91,92,93,94,95,96];
		if (b10 || c1) player.a.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46,51,52,53,54,55,56,61,62,63,64,65,66,71,72,73,74,75,76,81,82,83,84,85,86,91,92,93,94,95,96,101,102,103,104,105,106];
		};
	},
	update(diff){
		var gain1 = new ExpantaNum(1)
		if (hasUpgrade('a',25)) gain1 = gain1.mul(3)
		if (hasUpgrade('a',26)) gain1 = gain1.mul(9)
		if (hasUpgrade('a',31)) gain1 = gain1.mul(27)
		if (hasUpgrade('a',33)) gain1 = gain1.mul(81)
		if (hasUpgrade('a',34)) gain1 = gain1.mul(player.a.alpha.add(1).pow(0.4))
		if (hasUpgrade('a',36)) gain1 = gain1.mul(player.points.add(1).pow(0.05))
		if (hasUpgrade('a',44)) gain1 = gain1.mul(player.a.beta.add(1).pow(0.4))
		if (hasUpgrade('a',45) && player.a.getgamma) gain1 = gain1.mul(player.a.gamma.add(1).pow(0.4))
		if (hasUpgrade('a',71)) gain1 = gain1.mul(player.a.alpha.add(1).pow(0.05))
		if (hasUpgrade('a',81)) gain1 = gain1.mul(1e3)
		if (hasUpgrade('a',82)) gain1 = gain1.mul(1e5)
		if (hasUpgrade('a',83)) gain1 = gain1.mul(1e10)
		if (hasUpgrade('a',91)) gain1 = gain1.mul(player.a.points.add(1).pow(0.015))
		if (hasUpgrade('a',92)) gain1 = gain1.mul(player.a.points.add(1).pow(0.0225))
		if (hasUpgrade('a',94)) gain1 = gain1.mul(player.a.alpha.add(1).pow(0.01))
		if (hasUpgrade('a',101)) gain1 = gain1.mul(1e300)
		if (hasMilestone('b',0)) gain1 = gain1.mul(1e10)
		if (hasMilestone('b',6)) gain1 = gain1.mul(1e30)
		if (hasUpgrade('b',11)) gain1 = gain1.mul(1e150)
		if (hasMilestone('b',13)) gain1 = gain1.mul(player.b.points.add(1).pow(3.5))
		if (hasMilestone('b',16)) gain1 = gain1.mul(player.b.zeta.add(1).pow(1.5))
		if (getBuyableAmount('c',12).gte(1)) gain1 = gain1.mul(new ExpantaNum(1e5).pow(getBuyableAmount('c',12)))
		if (hasUpgrade('c',23)) gain1 = gain1.mul(new ExpantaNum(1.5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
		if (hasMilestone('c',14)) gain1 = gain1.pow(1.05)
		if (hasUpgrade('a',24)) player.a.alpha = player.a.alpha.add(gain1.mul(diff))
		if (hasUpgrade('a',24)) player.a.alphas = gain1
		var gain2 = player.a.alpha.pow(0.3)
		if (player.a.alpha.gte(4e4)) player.a.getbeta = true
		if (hasUpgrade('a',41)) gain2 = gain2.mul(4)
		if (hasUpgrade('a',42)) gain2 = gain2.mul(16)
		if (hasUpgrade('a',43)) gain2 = gain2.mul(256)
		if (hasUpgrade('a',62)) gain2 = gain2.mul(player.a.gamma.add(1).pow(0.4))
		if (hasUpgrade('a',63) && player.a.getdelta) gain2 = gain2.mul(player.a.delta.add(1).pow(0.6))
		if (hasUpgrade('a',72)) gain2 = gain2.mul(player.a.beta.add(1).pow(0.1))
		if (hasUpgrade('a',73)) gain2 = gain2.mul(player.a.gamma.add(1).pow(0.12))
		if (hasUpgrade('a',81)) gain2 = gain2.mul(1e3)
		if (hasUpgrade('a',82)) gain2 = gain2.mul(1e5)
		if (hasUpgrade('a',83)) gain2 = gain2.mul(1e10)
		if (hasUpgrade('a',94)) gain2 = gain2.mul(player.a.alpha.add(1).pow(0.01))
		if (hasUpgrade('a',102)) gain2 = gain2.mul(1e250)
		if (hasMilestone('b',0)) gain2 = gain2.mul(1e10)
		if (hasMilestone('b',8)) gain2 = gain2.mul(1e45)
		if (hasMilestone('b',13)) gain2 = gain2.mul(player.b.points.add(1).pow(3.5))
		if (hasMilestone('b',16)) gain2 = gain2.mul(player.b.zeta.add(1).pow(1.5))
		if (getBuyableAmount('c',12).gte(1)) gain2 = gain2.mul(new ExpantaNum(1e5).pow(getBuyableAmount('c',12)))
		if (hasUpgrade('c',23)) gain2 = gain2.mul(new ExpantaNum(1.5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
		if (hasMilestone('c',14)) gain2 = gain2.pow(1.05)
		if (hasUpgrade('a',32) && player.a.getbeta) player.a.beta = player.a.beta.add(gain2.mul(diff))
		if (hasUpgrade('a',32) && player.a.getbeta) player.a.betas = gain2
		var gain3 = player.a.alpha.pow(0.02)
		if (player.a.alpha.gte('1e50')) player.a.getgamma = true
		if (hasUpgrade('a',52)) gain3 = gain3.mul(5)
		if (hasUpgrade('a',53)) gain3 = gain3.mul(25)
		if (hasUpgrade('a',54)) gain3 = gain3.mul(625)
		if (hasUpgrade('a',55)) gain3 = gain3.mul(player.a.points.add(1).pow(0.02))
		if (hasUpgrade('a',75)) gain3 = gain3.mul(player.a.gamma.add(1).pow(0.15))
		if (hasUpgrade('a',81)) gain3 = gain3.mul(1e3)
		if (hasUpgrade('a',82)) gain3 = gain3.mul(1e5)
		if (hasUpgrade('a',83)) gain3 = gain3.mul(1e10)
		if (hasUpgrade('a',84) && player.a.getepsilon) gain3 = gain3.mul(player.a.epsilon.add(1).pow(0.6))
		if (hasUpgrade('a',94)) gain3 = gain3.mul(player.a.alpha.add(1).pow(0.01))
		if (hasUpgrade('a',94)) gain3 = gain3.mul(1e10)
		if (hasUpgrade('a',95)) gain3 = gain3.mul(1e60)
		if (hasUpgrade('a',103)) gain3 = gain3.mul(1e200)
		if (hasMilestone('b',0)) gain3 = gain3.mul(1e10)
		if (hasMilestone('b',9)) gain3 = gain3.mul(40)
		if (hasMilestone('b',13)) gain3 = gain3.mul(player.b.points.add(1).pow(3.5))
		if (hasMilestone('b',16)) gain3 = gain3.mul(player.b.zeta.add(1).pow(1.5))
		if (getBuyableAmount('c',12).gte(1)) gain3 = gain3.mul(new ExpantaNum(1e5).pow(getBuyableAmount('c',12)))
		if (hasUpgrade('c',23)) gain3 = gain3.mul(new ExpantaNum(1.5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
		if (hasMilestone('c',14)) gain3 = gain3.pow(1.05)
		if (hasUpgrade('a',45) && player.a.getgamma) player.a.gamma = player.a.gamma.add(gain3.mul(diff))
		if (hasUpgrade('a',45) && player.a.getgamma) player.a.gammas = gain3
		var gain4 = player.a.alpha.pow(0.005)
		if (player.a.alpha.gte('1e180')) player.a.getdelta = true
		if (hasUpgrade('a',64)) gain4 = gain4.mul(6)
		if (hasUpgrade('a',65)) gain4 = gain4.mul(36)
		if (hasUpgrade('a',66)) gain4 = gain4.mul(1296)
		if (hasUpgrade('a',76)) gain4 = gain4.mul(player.a.alpha.add(1).pow(0.025))
		if (hasUpgrade('a',81)) gain4 = gain4.mul(1e3)
		if (hasUpgrade('a',82)) gain4 = gain4.mul(1e5)
		if (hasUpgrade('a',83)) gain4 = gain4.mul(1e10)
		if (hasUpgrade('a',84) && player.a.getepsilon) gain4 = gain4.mul(player.a.epsilon.add(1).pow(0.4))
		if (hasUpgrade('a',94)) gain4 = gain4.mul(player.a.alpha.add(1).pow(0.01))
		if (hasUpgrade('a',104)) gain4 = gain4.mul(1e150)
		if (hasMilestone('b',0)) gain4 = gain4.mul(1e10)
		if (hasMilestone('b',10)) gain4 = gain4.mul(1e35)
		if (hasMilestone('b',13)) gain4 = gain4.mul(player.b.points.add(1).pow(3.5))
		if (hasMilestone('b',16)) gain4 = gain4.mul(player.b.zeta.add(1).pow(1.5))
		if (getBuyableAmount('c',12).gte(1)) gain4 = gain4.mul(new ExpantaNum(1e5).pow(getBuyableAmount('c',12)))
		if (hasUpgrade('c',23)) gain4 = gain4.mul(new ExpantaNum(1.5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
		if (hasMilestone('c',14)) gain4 = gain4.pow(1.05)
		if (hasUpgrade('a',63) && player.a.getdelta) player.a.delta = player.a.delta.add(gain4.mul(diff))
		if (hasUpgrade('a',63) && player.a.getdelta) player.a.deltas = gain4
		var gain5 = player.a.alpha.pow(0.0005)
		if (player.a.alpha.gte('1e529')) player.a.getepsilon = true
		if (hasUpgrade('a',85)) gain5 = gain5.mul(1e3)
		if (hasUpgrade('a',86)) gain5 = gain5.mul(1e6)
		if (hasUpgrade('a',93)) gain5 = gain5.mul(player.a.alpha.add(1).pow(0.015))
		if (hasUpgrade('a',94)) gain5 = gain5.mul(player.a.alpha.add(1).pow(0.01))
		if (hasUpgrade('a',105)) gain5 = gain5.mul(1e100)
		if (hasMilestone('b',0)) gain5 = gain5.mul(1e10)
		if (hasMilestone('b',10)) gain5 = gain5.mul(1e20)
		if (hasMilestone('b',13)) gain5 = gain5.mul(player.b.points.add(1).pow(3.5))
		if (hasMilestone('b',16)) gain5 = gain5.mul(player.b.zeta.add(1).pow(1.5))
		if (getBuyableAmount('c',12).gte(1)) gain5 = gain5.mul(new ExpantaNum(1e5).pow(getBuyableAmount('c',12)))
		if (hasUpgrade('c',23)) gain5 = gain5.mul(new ExpantaNum(1.5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
		if (hasMilestone('c',14)) gain5 = gain5.pow(1.05)
		if (hasUpgrade('a',84) && player.a.getepsilon) player.a.epsilon = player.a.epsilon.add(gain5.mul(diff))
		if (hasUpgrade('a',84) && player.a.getepsilon) player.a.epsilons = gain5
	},
upgrades:{
	11:{
		title:"纯粹发疯的世界",
		description:"未知获取x10",
		cost:new ExpantaNum(1),
	},
	12:{
		title:"来让我们一起发疯",
		description:"未知获取x40",
		cost:new ExpantaNum(10),
		unlocked(){return hasUpgrade('a',11)},
	},
	13:{
		title:"What's this?",
		description:"未知获取随未知数量增加",
		cost:new ExpantaNum(200),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.points.add(1).pow(0.5))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',12)},
	},
	14:{
		title:"你知道的(1/3)",
		description:"未知获取x11.11",
		cost:new ExpantaNum(7e5),
		unlocked(){return hasUpgrade('a',13)},
	},
	15:{
		title:"你知道的(2/3)",
	    description:"未知获取x111.1",
		cost:new ExpantaNum('5e7'),
		unlocked(){return hasUpgrade('a',14)},
	},
	16:{
		title:"你知道的(3/3)",
		description:"未知获取x1111",
		cost:new ExpantaNum('3e11'),
		unlocked(){return hasUpgrade('a',15)},
	},
	21:{
		title:"来了?",
		description:"未知获取随膨胀点数量增加",
		cost:new ExpantaNum('1e18'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.points.add(1).pow(0.25))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
	    unlocked(){return hasUpgrade('a',16)},
	},
	22:{
		title:"来了.",
		description:"自动获取10%可获取膨胀点",
		cost:new ExpantaNum('1e33'),
		unlocked(){return hasUpgrade('a',21)},
	},
	23:{
		title:"干什么!",
		description:"使膨胀点获取的公式更好",
		cost:new ExpantaNum('2e35'),
		unlocked(){return hasUpgrade('a',22)},
	},
	24:{
		title:"生了个孩子",
		description:"解锁资源α",
		cost:new ExpantaNum('1e50'),
		unlocked(){return hasUpgrade('a',23)},
	},
	25:{
		title:"让我们装扮一下这个孩子(1/3)",
		description:"α获取x3",
		cost:new ExpantaNum('1e56'),
		unlocked(){return hasUpgrade('a',24)},
	},
	26:{
		title:"让我们装扮一下这个孩子(2/3)",
		description:"α获取x9",
		cost:new ExpantaNum('1e61'),
		unlocked(){return hasUpgrade('a',25)},
	},
	31:{
		title:"让我们装扮一下这个孩子(3/3)",
		description:"α获取x27",
		cost:new ExpantaNum('1e66'),
		unlocked(){return hasUpgrade('a',26)},
	},
	32:{
		title:"一个不够?再生一个!",
		description:"解锁资源β",
		cost:new ExpantaNum('2e72'),
		unlocked(){return hasUpgrade('a',31)},
	},
	33:{
		title:"添灯结彩",
		description:"α获取x81",
		cost:new ExpantaNum('1e81'),
		unlocked(){return hasUpgrade('a',32)},
	},
	34:{
		title:"更猛烈些",
		description:"α获取随α数量增加",
		cost:new ExpantaNum('1e90'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.alpha.add(1).pow(0.4))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',33)},
	},
	35:{
		title:"¿",
		description:"点数获取x1e10",
		cost:new ExpantaNum('1e108'),
		unlocked(){return hasUpgrade('a',34)}
	},
	36:{
		title:"倒反天罡",
		description:"α获取随未知数量增加",
		cost:new ExpantaNum('1e172'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.points.add(1).pow(0.05))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',35)},
	},
	41:{
		title:"让我们装扮一下第二个孩子(1/3)",
		description:"β获取x4",
		cost:new ExpantaNum('1e254'),
		unlocked(){return hasUpgrade('a',36)},
	},
	42:{
		title:"让我们装扮一下第二个孩子(2/3)",
		description:"β获取x16",
		cost:new ExpantaNum('1e264'),
		unlocked(){return hasUpgrade('a',41)},
	},
	43:{
		title:"让我们装扮一下第二个孩子(3/3)",
		description:"β获取x256",
		cost:new ExpantaNum('1e275'),
		unlocked(){return hasUpgrade('a',42)},
	},
	44:{
		title:"老二的关爱",
		description:"α获取随β数量增加",
		cost:new ExpantaNum('1e285'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.beta.add(1).pow(0.4))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',43)},
	},
	45:{
		title:"还生一个??",
		description:"解锁资源γ",
		cost:new ExpantaNum('1e385'),
		unlocked(){return hasUpgrade('a',44)},
	},
	46:{
		title:"完整体",
		description:"自动获取100%可获取膨胀点",
		cost:new ExpantaNum('1e406'),
		unlocked(){return hasUpgrade('a',45)},
	},
	51:{
		title:"成年的老大",
		description:"α现在可以加成膨胀点获取了，但是倍率较低",
		cost:new ExpantaNum('1e409'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.alpha.add(1).pow(0.1))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',46)},
	},
	52:{
		title:"让我们装扮一下第三个孩子(1/3)",
		description:"γ获取x5",
		cost:new ExpantaNum('1e425'),
		unlocked(){return hasUpgrade('a',51)},
	},
	53:{
		title:"让我们装扮一下第三个孩子(2/3)",
		description:"γ获取x25",
		cost:new ExpantaNum('1e435'),
		unlocked(){return hasUpgrade('a',52)},
	},
	54:{
		title:"让我们装扮一下第三个孩子(3/3)",
		description:"γ获取x625",
		cost:new ExpantaNum('1e445'),
		unlocked(){return hasUpgrade('a',53)},
	},
	55:{
		title:"帮助",
		description:"γ获取随膨胀点数量增加",
		cost:new ExpantaNum('1e460'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.points.add(1).pow(0.02))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',54)},
	},
	56:{
		title:"成年的老二",
		description:"β现在可以加成未知获取了，但是倍率较低",
		cost:new ExpantaNum('1e540'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.beta.add(1).pow(0.25))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',55)},
	},
	61:{
		title:"GAS!GAS!GAS!",
		description:"未知获取随未知数量增加，再一次",
		cost:new ExpantaNum('1e665'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.points.add(1).pow(0.025))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',56)},
	},
	62:{
		title:"老三的帮助",
		description:"β获取随γ数量增加",
		cost:new ExpantaNum('1e980'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.gamma.add(1).pow(0.4))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',61)},
	},
	63:{
		title:"还生一个???",
		description:"解锁资源δ",
		cost:new ExpantaNum('1e1385'),
		unlocked(){return hasUpgrade('a',62)},
	},
	64:{
		title:"让我们装扮一下第四个孩子(1/3)",
		description:"δ获取x6",
		cost:new ExpantaNum('1e1505'),
		unlocked(){return hasUpgrade('a',63)},
	},
	65:{
		title:"让我们装扮一下第四个孩子(2/3)",
		description:"δ获取x36",
		cost:new ExpantaNum('1e1530'),
		unlocked(){return hasUpgrade('a',64)},
	},
	66:{
		title:"让我们装扮一下第四个孩子(3/3)",
		description:"δ获取x1296",
		cost:new ExpantaNum('1e1555'),
		unlocked(){return hasUpgrade('a',65)},
	},
	71:{
		title:"老大的自我修养",
		description:"α获取随α数量增加，再一次",
		cost:new ExpantaNum('1e1660'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.alpha.add(1).pow(0.05))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',66)},
	},
	72:{
		title:"老二的自我修养",
	    description:"β获取随β数量增加",
		cost:new ExpantaNum('1e1888'),
		effect(){
			var eff = new ExpantaNum(1)
			eff = eff.mul(player.a.beta.add(1).pow(0.1))
			return eff
		},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',71)},
	},
	73:{
		title:"成年的老三",
		description:"γ现在可以加成β获取了，但是倍率较低",
		cost:new ExpantaNum('1e2100'),
		effect(){
				var eff = new ExpantaNum(1)
				eff = eff.mul(player.a.gamma.add(1).pow(0.12))
				return eff
			},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',72)},
	},
	74:{
		title:"直观",
		description:"未知获取x1e8，膨胀点获取x1e5",
		cost:new ExpantaNum('1e2200'),
		unlocked(){return hasUpgrade('a',73)},
	},
	75:{
		title:"老三的自我修养",
		description:"γ获取随γ数量增加",
		cost:new ExpantaNum('1e2310'),
		effect(){
				var eff = new ExpantaNum(1)
				eff = eff.mul(player.a.gamma.add(1).pow(0.15))
				return eff
			},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',74)},
	},
	76:{
		title:"哥哥的帮助1",
		description:"δ获取随α数量增加",
		cost:new ExpantaNum('1e2380'),
		effect(){
				var eff = new ExpantaNum(1)
				eff = eff.mul(player.a.alpha.add(1).pow(0.025))
				return eff
			},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',75)},
	},
	81:{
		title:"大礼(1/3)",
		description:"α,β,γ,δ获取x1e3",
		cost:new ExpantaNum('1e2415'),
		unlocked(){return hasUpgrade('a',76)},
	},
	82:{
		title:"大礼(2/3)",
		description:"α,β,γ,δ获取x1e5",
		cost:new ExpantaNum('1e2485'),
		unlocked(){return hasUpgrade('a',81)},
	},
	83:{
		title:"大礼(3/3)",
		description:"α,β,γ,δ获取x1e10",
		cost:new ExpantaNum('1e2600'),
		unlocked(){return hasUpgrade('a',82)},
	},
	84:{
		title:"最后一个了，我保证",
		description:"解锁资源ε",
		cost:new ExpantaNum('1e2850'),
		unlocked(){return hasUpgrade('a',83)},
	},
	85:{
		title:"让我们狠狠装扮一下第五个孩子(1/2)",
		description:"ε获取x1e3",
		cost:new ExpantaNum('1e2873'),
		unlocked(){return hasUpgrade('a',84)},
	},
	86:{
		title:"让我们狠狠装扮一下第五个孩子(2/2)",
		description:"ε获取x1e6",
		cost:new ExpantaNum('1e2885'),
		unlocked(){return hasUpgrade('a',85)},
	},
	91:{
		title:"热辣的吻",
		description:"α获取随膨胀点数量增加",
		cost:new ExpantaNum('1e2920'),
		effect(){
				var eff = new ExpantaNum(1)
				eff = eff.mul(player.a.points.add(1).pow(0.015))
				return eff
			},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',86)},
	},
	92:{
		title:"I love you more than you'll ever know.",
		description:"α获取随膨胀点数量增加，再一次",
		cost:new ExpantaNum('1e3320'),
			effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.a.points.add(1).pow(0.0225))
					return eff
				},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',91)},
	},
	93:{
		title:"哥哥的帮助2",
		description:"ε获取随α数量增加",
		cost:new ExpantaNum('1e4070'),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.a.alpha.add(1).pow(0.015))
					return eff
				},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',92)},
	},
	94:{
		title:"HOT",
		description:"α,β,γ,δ,ε获取随α增加，γ获取x1e10",
		cost:new ExpantaNum('1e4100'),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.a.alpha.add(1).pow(0.01))
					return eff
				},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',93)},
	},
	95:{
		title:"老三的礼物",
		description:"γ获取x1e60",
		cost:new ExpantaNum('1e4280'),
		unlocked(){return hasUpgrade('a',94)},
	},
	96:{
		title:"皆大欢喜",
		description:"未知获取随未知数量增加，最后一次",
		cost:new ExpantaNum('1e4500'),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.points.add(1).pow(0.5))
					return eff
				},
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('a',95)},
	},
	101:{
		title:"给所有孩子的礼物(1/5)",
		description:"α获取x1e300",
		cost:new ExpantaNum('1e6145'),
		unlocked(){return hasUpgrade('a',96)},
	},
	102:{
		title:"给所有孩子的礼物(2/5)",
		description:"β获取x1e250",
		cost:new ExpantaNum('1e7525'),
		unlocked(){return hasUpgrade('a',101)},
	},
	103:{
		title:"给所有孩子的礼物(3/5)",
		description:"γ获取x1e200",
		cost:new ExpantaNum('1e8440'),
		unlocked(){return hasUpgrade('a',102)},
	},
	104:{
		title:"给所有孩子的礼物(4/5)",
		description:"δ获取x1e150",
		cost:new ExpantaNum('1e9320'),
		unlocked(){return hasUpgrade('a',103)},
	},
	105:{
		title:"给所有孩子的礼物(5/5)",
		description:"δ获取x1e100",
		cost:new ExpantaNum('1e9650'),
		unlocked(){return hasUpgrade('a',104)},
	},
	106:{
		title:"我们终会相见",
		description:"解锁新层级",
		cost:new ExpantaNum('1e10000'),
		unlocked(){return hasUpgrade('a',105)},
	},
},
tabFormat:{
	主界面:{
		buttonStyle(){return {'color':'aqua'}},
		content:["main-display","prestige-button","resource-display","upgrades"],
		},
	资源:{
		unlocked(){return hasUpgrade('a',24)},
		buttonStyle(){return {'color':'aqua'}},
		content:[
			["display-text",
		                function(){
							if (hasUpgrade('a',24))
							return "<h2>您有"+"<span style='color:#d4792d"+";font-size:25px;'>"+format(player.a.alpha)+"</span>"+"α<br>"+"每秒获取:"+"<span style='color:#d4792d"+";font-size:25px;'>"+format(new ExpantaNum(player.a.alphas))+"</span>"+"α"+"<br>"+"<h3>效果:加成未知获取，目前:"+format(new ExpantaNum(player.a.alpha).add(1).pow(0.8),2)+"x"
						},
						],
						"blank",
			["display-text",
		                function(){
							if (hasUpgrade('a',32))
							return "<h2>您有"+"<span style='color:#3fec20"+";font-size:25px;'>"+format(player.a.beta)+"</span>"+"β<br>"+"每秒获取:"+"<span style='color:#3fec20"+";font-size:25px;'>"+format(new ExpantaNum(player.a.betas))+"</span>"+"β"+"<br>"+"<h4>(拥有4e4α后自动生成)<br>"+"<h3>效果:加成膨胀点获取，目前:"+format(new ExpantaNum(player.a.beta).add(1).pow(0.65),2)+"x"
				        },
			            ],
						"blank",
		    ["display-text",
						function(){
						    if (hasUpgrade('a',45))
							return "<h2>您有"+"<span style='color:#30f0ea"+";font-size:25px;'>"+format(player.a.gamma)+"</span>"+"γ<br>"+"每秒获取:"+"<span style='color:#30f0ea"+";font-size:25px;'>"+format(new ExpantaNum(player.a.gammas))+"</span>"+"γ"+"<br>"+"<h4>(拥有1e50α后自动生成)<br>"+"<h3>效果:加成α获取，目前:"+format(new ExpantaNum(player.a.gamma).add(1).pow(0.4),2)+"x"
						},
						],
						"blank",
			["display-text",
						function(){
						    if (hasUpgrade('a',63))
							return "<h2>您有"+"<span style='color:#aa00ff"+";font-size:25px;'>"+format(player.a.delta)+"</span>"+"δ<br>"+"每秒获取:"+"<span style='color:#aa00ff"+";font-size:25px;'>"+format(new ExpantaNum(player.a.deltas))+"</span>"+"δ"+"<br>"+"<h4>(拥有1e180α后自动生成)<br>"+"<h3>效果:加成β获取，目前:"+format(new ExpantaNum(player.a.delta).add(1).pow(0.6),2)+"x"
						},
						],
						"blank",
			["display-text",
						function(){
						    if (hasUpgrade('a',84))
							return "<h2>您有"+"<span style='color:#ffaaff"+";font-size:25px;'>"+format(player.a.epsilon)+"</span>"+"ε<br>"+"每秒获取:"+"<span style='color:#ffaaff"+";font-size:25px;'>"+format(new ExpantaNum(player.a.epsilons))+"</span>"+"ε"+"<br>"+"<h4>(拥有1e529α后自动生成)<br>"+"<h3>效果:加成γ和δ获取，目前:"+'γ:'+format(new ExpantaNum(player.a.epsilon).add(1).pow(0.6),2)+"x"+'，'+"δ:"+format(new ExpantaNum(player.a.epsilon).add(1).pow(0.4),2)+"x"
						},
						],
		],
	}
}
})
addLayer("b",{
	symbol:"</sup>2",
	position:1,
	startData(){
		return{
			unlocked:false,
			points:new ExpantaNum(0),
			zeta:new ExpantaNum(0),
			zetas:new ExpantaNum(0),
			eta:new ExpantaNum(0),
			etas:new ExpantaNum(0),
			geteta:false,
			theta:new ExpantaNum(0),
			thetas:new ExpantaNum(0),
			gettheta:false,
		}
	},
	color:"#587e88",
	resource:"膨胀点^2",
	type:"normal",
	requires:new ExpantaNum('1e10000'),
	exponent:0.001,
	effectDescription(){
		if (hasMilestone('b',13)){
			return "<h2>加成膨胀点 未知 α~ε获取"+"<span style='color:#1c91ff"+";font-size:25px;'>"+format(new ExpantaNum(player.b.points).add(1).pow(3.5),2)+"</span>"+"倍"
		}
		if (hasMilestone('b',1)){
		    return "<h2>加成膨胀点和未知获取"+"<span style='color:#1c91ff"+";font-size:25px;'>"+format(new ExpantaNum(player.b.points).add(1).pow(3.5),2)+"</span>"+"倍"
		}
		    return "<h2>加成膨胀点获取"+"<span style='color:#1c91ff"+";font-size:25px;'>"+format(new ExpantaNum(player.b.points).add(1).pow(3.5),2)+"</span>"+"倍"
	},
	baseAmount(){return player.a.points},
	baseResource:"膨胀点",
	gainMult(){
		mult = new ExpantaNum(1)
		if (hasUpgrade('b',11)) mult = mult.mul(10)
		if (hasUpgrade('b',13)) mult = mult.mul(player.b.points.add(1).pow(0.2))
		if (hasUpgrade('b',14)) mult = mult.mul(player.b.points.add(1).pow(0.25))
		if (hasUpgrade('b',15)) mult = mult.mul(player.b.points.add(1).pow(0.3))
		if (hasMilestone('b',14)) mult = mult.mul(1e3)
		if (hasMilestone('b',20)) mult = mult.pow(1.05)
		if (hasMilestone('b',22)) mult = mult.mul(1e5)
		if (hasUpgrade('b',31)) mult = mult.mul(player.b.zeta.add(1).pow(0.05))
		if (hasUpgrade('b',34)) mult = mult.pow(1.01)
		if (hasUpgrade('c',12)) mult = mult.mul(player.c.points.add(1).pow(6))
		if (hasMilestone('c',12)) mult = mult.mul(player.c.points.add(1).pow(10))
		return mult
	},
	gainExp(){
		var exp = new ExpantaNum(1)
		return exp
	},
	row:2,
	hotkeys:[
		{key: "b", description: "b: 进行层级2重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	passiveGeneration(){
		if (hasMilestone('b',15)){
			return 1
		}
		if (hasMilestone('b',12)){
			return 0.1
		}
		if (hasUpgrade('b',12)){
			return 0.01
		}
		return 0
	},
	doReset(resettingLayer){
	    let keep = [];
		    var c2 = hasMilestone('c',1)
			var c3 = hasMilestone('c',2)
			var c4 = hasMilestone('c',3)
			var c5 = hasMilestone('c',4)
			var c6 = hasMilestone('c',5)
		if (layers[resettingLayer].row > this.row){
		    layerDataReset(this.layer,keep)
			if (c2) player.b.milestones = [0,1,2,3,4,5,6,7,8,9,10,11];
			if (c3) player.b.upgrades = [11,12,13,14,15,16];
			if (c4) player.b.milestones = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
			if (c5) player.b.upgrades = [11,12,13,14,15,16,21,22,23,24,25,26,31,32,33,34,35,36,41,42,43,44,45,46];
			if (c6) player.b.milestones = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
			
	    };
	},
	layerShown(){
		if (hasUpgrade('a',106) || player.b.points.gte(1))
		return true
	},
	update(diff){
		var gain6 = new ExpantaNum(1)
		if (hasMilestone('b',17)) gain6 = gain6.mul(5)
		if (hasMilestone('b',18)) gain6 = gain6.mul(player.b.zeta.add(1).pow(0.4))
		if (hasMilestone('b',20)) gain6 = gain6.mul(player.points.add(1).pow(0.0005))
		if (hasMilestone('b',21)) gain6 = gain6.mul(player.b.points.add(1).pow(0.25))
		if (hasUpgrade('b',21)) gain6 = gain6.mul(player.a.alpha.add(1).pow(0.0025))
		if (hasUpgrade('b',22) && player.b.geteta) gain6 = gain6.mul(player.b.eta.add(1).pow(0.75))
		if (getBuyableAmount('c',13).gte(1)) gain6 = gain6.mul(new ExpantaNum(1e3).pow(getBuyableAmount('c',13)))
		if (hasMilestone('c',15)) gain6 = gain6.pow(1.05)
		if (hasMilestone('b',16)) player.b.zeta = player.b.zeta.add(gain6.mul(diff))
		if (hasMilestone('b',16)) player.b.zetas = gain6
		var gain7 = player.b.zeta.pow(0.02)
		if (player.b.zeta.gte(1e133)) player.b.geteta = true
		if (hasUpgrade('b',23)) gain7 = gain7.mul(1e3)
		if (hasUpgrade('b',24)) gain7 = gain7.mul(1e4)
        if (hasUpgrade('b',25)) gain7 = gain7.mul(1e5)
		if (hasUpgrade('b',26)) gain7 = gain7.mul(1e6)
		if (hasUpgrade('b',32)) gain7 = gain7.mul(player.b.eta.add(1).pow(0.25))
		if (hasUpgrade('b',33)) gain7 = gain7.mul(1e25)
		if (hasUpgrade('b',35)) gain7 = gain7.mul(player.a.epsilon.add(1).pow(0.01))
		if (hasUpgrade('b',36) && player.b.gettheta) gain7 = gain7.mul(player.b.theta.add(1).pow(0.5))
		if (hasMilestone('b',24)) gain7 = gain7.mul(player.points.add(1).pow(0.0025))
		if (getBuyableAmount('c',13).gte(1)) gain7 = gain7.mul(new ExpantaNum(1e3).pow(getBuyableAmount('c',13)))
		if (hasMilestone('c',15)) gain7 = gain7.pow(1.05)
		if (hasUpgrade('b',22) && player.b.geteta) player.b.eta = player.b.eta.add(gain7.mul(diff))
		if (hasUpgrade('b',22) && player.b.geteta) player.b.etas = gain7
		var gain8 = player.b.zeta.pow(0.0002)
		if (player.b.zeta.gte('3e595')) player.b.gettheta = true
		if (hasUpgrade('b',41)) gain8 = gain8.mul(1e3)
		if (hasUpgrade('b',42)) gain8 = gain8.mul(1e4)
		if (hasUpgrade('b',43)) gain8 = gain8.mul(1e5)
		if (hasUpgrade('b',44)) gain8 = gain8.mul(1e6)
		if (hasUpgrade('b',45)) gain8 = gain8.mul(player.points.add(1).pow(0.0003))
		if (hasUpgrade('b',46)) gain8 = gain8.mul(player.b.points.add(1).pow(0.03))
		if (hasMilestone('b',25)) gain8 = gain8.mul(1e30)
		if (getBuyableAmount('c',13).gte(1)) gain8 = gain8.mul(new ExpantaNum(1e3).pow(getBuyableAmount('c',13)))
		if (hasMilestone('c',15)) gain8 = gain8.pow(1.05)
		if (hasUpgrade('b',36) && player.b.gettheta) player.b.theta = player.b.theta.add(gain8.mul(diff))
		if (hasUpgrade('b',36) && player.b.gettheta) player.b.thetas = gain8
	},
milestones:{
	0:{
	    requirementDescription:"1 膨胀点^2",
	    effectDescription(){return "你来到了这里，为了让你更方便，α-ε获取全部乘以1e10"},
	    done(){return player.b.points.gte(1)},
	},
	1:{
		requirementDescription:"2 膨胀点^2",
		effectDescription(){return "膨胀点^2现在也可以加成未知获取了，倍率和膨胀点获取一样"},
		done(){return player.b.points.gte(2)},
		unlocked(){return hasMilestone('b',0)},
	},
	2:{
		requirementDescription:"3 膨胀点^2",
		effectDescription(){return "保留层级1第一行升级"},
		done(){return player.b.points.gte(3)},
		unlocked(){return hasMilestone('b',1)},
	},
	3:{
		requirementDescription:"4 膨胀点^2",
		effectDescription(){return "保留层级1第二行升级，膨胀点获取x1e40"},
		done(){return player.b.points.gte(4)},
		unlocked(){return hasMilestone('b',2)},
	},
	4:{
		requirementDescription:"5 膨胀点^2",
		effectDescription(){return "保留层级1第三行升级，未知获取x1e100"},
		done(){return player.b.points.gte(5)},
		unlocked(){return hasMilestone('b',3)},
	},
	5:{
		requirementDescription:"7 膨胀点^2",
		effectDescription(){return "保留层级1第四行升级"},
		done(){return player.b.points.gte(7)},
		unlocked(){return hasMilestone('b',4)},
	},
	6:{
		requirementDescription:"10 膨胀点^2",
		effectDescription(){return "保留层级1第五行升级，α获取x1e30"},
		done(){return player.b.points.gte(10)},
		unlocked(){return hasMilestone('b',5)},
	},
	7:{
		requirementDescription:"15 膨胀点^2",
		effectDescription(){return "保留层级1第六行升级"},
		done(){return player.b.points.gte(15)},
		unlocked(){return hasMilestone('b',6)},
	},
	8:{
		requirementDescription:"20 膨胀点^2",
		effectDescription(){return "保留层级1第七行升级，β获取x1e45"},
		done(){return player.b.points.gte(20)},
		unlocked(){return hasMilestone('b',7)},
	},
	9:{
		requirementDescription:"30 膨胀点^2",
		effectDescription(){return "保留层级1第八行升级，γ获取x1e40"},
		done(){return player.b.points.gte(30)},
		unlocked(){return hasMilestone('b',8)},
	},
	10:{
		requirementDescription:"40 膨胀点^2",
		effectDescription(){return "保留层级1第九行升级，δ获取x1e35，ε获取x1e20"},
		done(){return player.b.points.gte(40)},
		unlocked(){return hasMilestone('b',9)},
	},
	11:{
		requirementDescription:"60 膨胀点^2",
		effectDescription(){return "保留层级1第十行升级，解锁层级2升级"},
		done(){return player.b.points.gte(60)},
		unlocked(){return hasMilestone('b',10)},
	},
	12:{
		requirementDescription:"1e12 膨胀点^2",
		effectDescription(){return "自动获取10%可获取膨胀点^2"},
		done(){return player.b.points.gte(1e12)},
		unlocked(){return hasUpgrade('b',16)},
	},
	13:{
		requirementDescription:"2e13 膨胀点^2",
		effectDescription(){return "膨胀点^2现在也可以加成α~ε获取了"},
		done(){return player.b.points.gte(2e13)},
		unlocked(){return hasMilestone('b',12)},
	},
	14:{
		requirementDescription:"1e16 膨胀点^2",
		effectDescription(){return "膨胀点^2获取x1e3"},
		done(){return player.b.points.gte(1e16)},
		unlocked(){return hasMilestone('b',13)},
	},
	15:{
		requirementDescription:"1e31 膨胀点^2",
		effectDescription(){return "自动获取100%可获取膨胀点^2,未知获取^1.05"},
		done(){return player.b.points.gte(1e31)},
		unlocked(){return hasMilestone('b',14)},
	},
    16:{
    	requirementDescription:"1e42 膨胀点^2",
    	effectDescription(){return "解锁一个新资源"},
    	done(){return player.b.points.gte(1e42)},
    	unlocked(){return hasMilestone('b',15)},
    },
	17:{
		requirementDescription:"5e44 膨胀点^2",
		effectDescription(){return "ζ获取x5"},
		done(){return player.b.points.gte(5e44)},
		unlocked(){return hasMilestone('b',16)},
	},
	18:{
		requirementDescription:"3e45 膨胀点^2",
		effectDescription(){return "ζ获取随ζ数量增加<br>目前:"+format(new ExpantaNum(player.b.zeta).add(1).pow(0.4),2)+"倍"},
		done(){return player.b.points.gte(3e45)},
		unlocked(){return hasMilestone('b',17)},
	},
	19:{
		requirementDescription:"2e46 膨胀点^2",
		effectDescription(){return "未知获取随未知数量增加<br>目前:"+"^"+format(new ExpantaNum(player.points).add(1).pow(1e-6),2)},
		done(){return player.b.points.gte(2e46)},
		unlocked(){return hasMilestone('b',18)},
	},
	20:{
		requirementDescription:"7e47 膨胀点^2",
		effectDescription(){return "膨胀点^2获取^1.05<br>ζ获取随未知数量增加<br>目前:"+format(new ExpantaNum(player.points).add(1).pow(0.0005),2)+"倍"},
		done(){return player.b.points.gte(7e47)},
		unlocked(){return hasMilestone('b',19)},
	},
	21:{
		requirementDescription:"1e60 膨胀点^2",
		effectDescription(){return "ζ获取随膨胀点^2数量增加<br>目前:"+format(new ExpantaNum(player.b.points).add(1).pow(0.25),2)+"x"},
		done(){return player.b.points.gte(1e60)},
		unlocked(){return hasMilestone('b',20)},
	},
	22:{
		requirementDescription:"1e68 膨胀点^2",
		effectDescription(){return "膨胀点^2获取x1e5,解锁三排升级"},
		done(){return player.b.points.gte(1e68)},
		unlocked(){return hasMilestone('b',21)},
	},
	23:{
		requirementDescription:"1e550 膨胀点^2",
		effectDescription(){return "η现在可以加成膨胀点获取了，只是倍率稍稍降低<br>目前:"+format(new ExpantaNum(player.b.eta).add(1).pow(0.3),2)+"倍"},
		done(){return player.b.points.gte('1e550')},
		unlocked(){return hasUpgrade('b',46)},
	},
	24:{
		requirementDescription:"1e559 膨胀点^2",
		effectDescription(){return "η获取随未知数量增加，目前:"+format((new ExpantaNum(player.points)).pow(0.0025),2)+"倍"},
		done(){return player.b.points.gte('1e559')},
		unlocked(){return hasMilestone('b',23)},
	},
	25:{
		requirementDescription:"1e652 膨胀点^2",
		effectDescription(){return "θ获取x1e30"},
		done(){return player.b.points.gte('1e652')},
		unlocked(){return hasMilestone('b',24)},
	},
	26:{
		requirementDescription:"1e670 膨胀点^2",
		effectDescription(){return "解锁新层级"},
		done(){return player.b.points.gte('1e670')},
		unlocked(){return hasMilestone('b',25)},
	},
},
upgrades:{
    11:{
		title:"来了!",
		description:"膨胀点^2获取x10，α获取x1e150",
		cost:new ExpantaNum(120),
		unlocked(){return hasMilestone('b',11)},
	},
	12:{
		title:"解放双手...吗?",
		description:"自动获取1%可获取膨胀点^2",
		cost:new ExpantaNum(2000),
		unlocked(){return hasUpgrade('b',11)},
	},
	13:{
		title:"自我复制(20%)",
		description:"膨胀点^2获取随膨胀点^2数量增加",
		cost:new ExpantaNum(4000),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.b.points.add(1).pow(0.2))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('b',12)},
	},
	14:{
		title:"自我复制(50%)",
		description:"膨胀点^2获取随膨胀点^2数量增加，第二次",
		cost:new ExpantaNum(25000),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.b.points.add(1).pow(0.25))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('b',13)},
	},
	15:{
		title:"自我复制(100%)",
		description:"膨胀点^2获取随膨胀点^2数量增加，再一次",
		cost:new ExpantaNum(500000),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.b.points.add(1).pow(0.3))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('b',14)},
	},
	16:{
		title:"先暂停一下这里",
		description:"解锁一些里程碑",
		cost:new ExpantaNum(1e10),
		unlocked(){return hasUpgrade('b',15)},
	},
	21:{
		title:"又回来了",
		description:"ζ获取随α数量增加",
		cost:new ExpantaNum(1e112),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.a.alpha.add(1).pow(0.0025))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasMilestone('b',22)},
	},
	22:{
		title:"习惯了(1/2)",
		description:"解锁一个新资源",
		cost:new ExpantaNum(1e130),
		unlocked(){return hasUpgrade('b',21)},
	},
	23:{
		title:"装扮一下(1.1)",
		description:"η获取x1e3",
		cost:new ExpantaNum(5e132),
		unlocked(){return hasUpgrade('b',22)},
	},
	24:{
		title:"装扮一下(1.2)",
		description:"η获取x1e4",
		cost:new ExpantaNum(5e135),
		unlocked(){return hasUpgrade('b',23)},
	},
	25:{
		title:"装扮一下(1.3)",
		description:"η获取x1e5",
		cost:new ExpantaNum(5e138),
		unlocked(){return hasUpgrade('b',24)},
	},
	26:{
		title:"装扮一下(1.4)",
		description:"η获取x1e6",
		cost:new ExpantaNum(5e141),
		unlocked(){return hasUpgrade('b',25)},
	},
	31:{
		title:"ζ的馈赠",
		description:"ζ现在可以加成膨胀点^2获取了，但是倍率较低",
		cost:new ExpantaNum(1e145),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.b.zeta.add(1).pow(0.05))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('b',26)},
	},
	32:{
		title:"eta.",
		description:"η获取随η数量增加",
		cost:new ExpantaNum(1e295),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.b.eta.add(1).pow(0.25))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('b',31)},
	},
	33:{
		title:"不知道写啥了以后就这样吧2UG33",
		description:"η获取x1e25",
		cost:new ExpantaNum('5e327'),
		unlocked(){return hasUpgrade('b',32)},
	},
	34:{
		title:"2UG34",
		description:"膨胀点^2获取^1.01",
		cost:new ExpantaNum('1e462'),
		unlocked(){return hasUpgrade('b',33)}
	},
	35:{
		title:"2UG35",
		description:"η获取随ε数量增加",
		cost:new ExpantaNum('1e493'),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.a.epsilon.add(1).pow(0.01))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('b',34)},
	},
	36:{
		title:"习惯了(2/2)",
		description:"解锁新资源",
		cost:new ExpantaNum('3e526'),
		unlocked(){return hasUpgrade('b',35)},
	},
	41:{
		title:"装扮一下(2.1)",
		description:"θ获取x1e3",
		cost:new ExpantaNum('1e530'),
		unlocked(){return hasUpgrade('b',36)},
	},
	42:{
		title:"装扮一下(2.2)",
		description:"θ获取x1e4",
		cost:new ExpantaNum('1e531'),
		unlocked(){return hasUpgrade('b',41)},
	},
	43:{
		title:"装扮一下(2.3)",
		description:"θ获取x1e4",
		cost:new ExpantaNum('1.5e533'),
		unlocked(){return hasUpgrade('b',42)},
	},
	44:{
		title:"装扮一下(2.4)",
		description:"θ获取x1e4",
		cost:new ExpantaNum('1.5e534'),
		unlocked(){return hasUpgrade('b',43)},
	},
	45:{
		title:"2UG45",
		description:"θ获取随未知数量增加",
		cost:new ExpantaNum('1e537'),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.points.add(1).pow(0.0003))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('b',44)},
	},
	46:{
		title:"2UG46",
		description:"θ获取随膨胀点^2数量增加，解锁一些里程碑",
		cost:new ExpantaNum('1e541'),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.b.points.add(1).pow(0.03))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('b',45)},
	},
},
tabFormat:{
	主界面:{
		buttonStyle(){return {'color':'#d4a68c'}},
		content:["main-display","prestige-button","resource-display","upgrades"],
	},
	里程碑:{
		buttonStyle(){return {'color':'#d4a68c'}},
		content:["main-display","prestige-button","resource-display","milestones"],
	},
	资源:{
		unlocked(){return hasMilestone('b',16)},
		buttonStyle(){return {'color':'#d4a68c'}},
		content:[
			["display-text",
		                function(){
							if (hasMilestone('b',16))
							return "<h2>您有"+"<span style='color:#d40003"+";font-size:25px;'>"+format(player.b.zeta)+"</span>"+"ζ<br>"+"每秒获取:"+"<span style='color:#d40003"+";font-size:25px;'>"+format(new ExpantaNum(player.b.zetas))+"</span>"+"ζ"+"<br>"+"<h3>效果:加成α~ε获取，目前:"+format(new ExpantaNum(player.b.zeta).add(1).pow(1.5),2)+"x"+"</span>"
						},
						],
						"blank",
			["display-text",
			            function(){
							if (hasUpgrade('b',22))
							return "<h2>您有"+"<span style='color:#aaff7f"+";font-size:25px;'>"+format(player.b.eta)+"</span>"+"η<br>"+"每秒获取:"+"<span style='color:#aaff7f"+";font-size:25px;'>"+format(new ExpantaNum(player.b.etas))+"</span>"+"η"+"<h4>(拥有1e133ζ后自动生成)<br>"+"<h3>效果:加成ζ获取，目前:"+format(new ExpantaNum(player.b.eta).add(1).pow(0.75),2)+"x"
						},
						],
			            "blank",
			["display-text",
			            function(){
							if (hasUpgrade('b',36))
							return "<h2>您有"+"<span style='color:#55557f"+";font-size:25px;'>"+format(player.b.theta)+"</span>"+"θ<br>"+"每秒获取:"+"<span style='color:#55557f"+";font-size:25px;'>"+format(new ExpantaNum(player.b.thetas))+"</span>"+"θ"+"<h4>(拥有3e595ζ后自动生成)<br>"+"<h3>效果:加成η获取，目前:"+format(new ExpantaNum(player.b.theta).add(1).pow(0.5),2)+"x"
						},
						],			
			],
		},
},
})
addLayer("c",{
	symbol:"</sup>3",
	position:2,
	startData(){return{
		unlocked:false,
		points:new ExpantaNum(0),
		answer:new ExpantaNum(0),
		answers:new ExpantaNum(0),
		answertotal:new ExpantaNum(0),
	}},
	color:"#ee55ea",
	resource:"膨胀点^3",
	type:"normal",
	requires:new ExpantaNum('1e670'),
	exponent:0.00125,
	baseAmount(){return player.b.points},
	baseResource:"膨胀点^2",
	gainMult(){
		mult = new ExpantaNum(1)
		if (hasUpgrade('c',13)) mult = mult.mul(3)
		if (hasUpgrade('c',22)) mult = mult.mul(new ExpantaNum(1.01).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
		if (hasUpgrade('c',26)) mult = mult.pow(1.05)
		if (hasMilestone('c',10)) mult = mult.mul(player.c.total.pow(0.125))
		if (hasMilestone('c',13)) mult = mult.pow(1.1)
		if (hasMilestone('c',18)) mult = mult.pow(1.05)
		return mult
	},
	gainExp(){
		var exp = new ExpantaNum(1)
		return exp
	},
	row:3,
	hotkeys:[
		{key: "c", description: "c: 进行层级3重置", onPress(){if (canReset(this.layer)) doReset(this.layer)}},
	],
	passiveGeneration(){
		if (hasMilestone('c',16)){
			return 0.3
		}
		if (hasMilestone('c',8)){
			return 0.1
		}
		return 0
	},
	effectDescription(){
		if (hasMilestone('c',12)){
			return "<h2>加成膨胀点^2获取"+"<span style='color:#1c91ff"+";font-size:25px;'>"+format(new ExpantaNum(player.c.points).add(1).pow(6).mul(new ExpantaNum(player.c.points).add(1).pow(10)),2)+"</span>"+"倍"
		}
		if (hasUpgrade('c',12)){
			return "<h2>加成膨胀点^2获取"+"<span style='color:#1c91ff"+";font-size:25px;'>"+format(new ExpantaNum(player.c.points).add(1).pow(6),2)+"</span>"+"倍"
		}
	},
	layerShown(){
		if (hasMilestone('b',26) || player.c.total.gte(1))
		return true
	},
	update(diff){
		var gainA = new ExpantaNum(0.01)
		if (hasMilestone('c',4)) gainA = gainA.mul(3)
		if (hasMilestone('c',6)) gainA = gainA.mul(2)
		if (hasMilestone('c',7)) gainA = gainA.mul(2.5)
		if (hasUpgrade('c',14)) gainA = gainA.mul(2)
		if (hasUpgrade('c',15)) gainA = gainA.mul(1.5)
		if (hasUpgrade('c',21)) gainA = gainA.mul(new ExpantaNum(1.005).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
		if (hasUpgrade('c',25)) gainA = gainA.mul(player.c.answer.pow(0.125))
		if (hasMilestone('c',9)) gainA = gainA.mul(player.c.answertotal.pow(0.025))
		if (hasMilestone('c',11)) gainA = gainA.mul(player.c.total.pow(0.0625))
		if (getBuyableAmount('c',22).gte(1)) gainA = gainA.mul(new ExpantaNum(1.025).pow(getBuyableAmount('c',22)))
		if (hasUpgrade('c',11)) player.c.answer = player.c.answer.add(gainA.mul(diff))
		if (hasUpgrade('c',11)) player.c.answertotal = player.c.answertotal.add(gainA.mul(diff))
		if (hasUpgrade('c',11)) player.c.answers = gainA
	},
milestones:{
	0:{
		requirementDescription:"总共 1 膨胀点^3",
		effectDescription(){return "解锁一个升级，保留层级1所有升级(为了你的手着想)"},
		done(){return player.c.total.gte(1)},
	},
	1:{
		requirementDescription:"总共 2 膨胀点^3",
		effectDescription(){return "保留层级2的第一部分里程碑，答案页面增加1个可购买"},
		done(){return player.c.total.gte(2)},
		unlocked(){return hasMilestone('c',0)},
	},
	2:{
		requirementDescription:"总共 3 膨胀点^3",
		effectDescription(){return "保留层级2的第一部分升级"},
		done(){return player.c.total.gte(3)},
		unlocked(){return hasMilestone('c',1)},
	},
	3:{
		requirementDescription:"总共 5 膨胀点^3",
		effectDescription(){return "保留层级2的第二部分里程碑"},
		done(){return player.c.total.gte(5)},
		unlocked(){return hasMilestone('c',2)},
	},
	4:{
		requirementDescription:"总共 8 膨胀点^3",
		effectDescription(){return "保留层级2的第二部分升级，答案获取x3"},
		done(){return player.c.total.gte(8)},
		unlocked(){return hasMilestone('c',3)},
	},
	5:{
		requirementDescription:"总共 15 膨胀点^3",
		effectDescription(){return "保留层级2的第三部分里程碑"},
		done(){return player.c.total.gte(15)},
		unlocked(){return hasMilestone('c',4)},
	},
	6:{
		requirementDescription:"总共 25 膨胀点^3",
		effectDescription(){return "答案获取x2"},
		done(){return player.c.total.gte(25)},
		unlocked(){return hasMilestone('c',5)},
	},
	7:{
		requirementDescription:"总共 40 膨胀点^3",
		effectDescription(){return "解锁新升级，答案获取x2.5"},
		done(){return player.c.total.gte(40)},
		unlocked(){return hasMilestone('c',6)},
	},
	8:{
		requirementDescription:"总共 10000 膨胀点^3",
		effectDescription(){return "每秒获得10%可获得膨胀点^3"},
		done(){return player.c.total.gte(10000)},
		unlocked(){return hasUpgrade('c',26)},
	},
	9:{
		requirementDescription:"总共 20000 膨胀点^3",
		effectDescription(){return "答案获取随答案获取总数量增加<br>目前:"+format(new ExpantaNum(player.c.answertotal).add(1).pow(0.025),2)+"倍"},
		done(){return player.c.total.gte(20000)},
		unlocked(){return hasMilestone('c',8)},
	},
	10:{
		requirementDescription:"总共 42500 膨胀点^3",
		effectDescription(){return "膨胀点^3获取随膨胀点^3获取总数量增加<br>目前:"+format(new ExpantaNum(player.c.total).add(1).pow(0.125),2)+"倍"},
		done(){return player.c.total.gte(42500)},
		unlocked(){return hasMilestone('c',9)},
	},
	11:{
		requirementDescription:"总共 85000 膨胀点^3",
		effectDescription(){return "答案获取随膨胀点^3获取总数量增加<br>目前:"+format(new ExpantaNum(player.c.total).add(1).pow(0.0625),2)+"倍"},
		done(){return player.c.total.gte(85000)},
		unlocked(){return hasMilestone('c',10)},
	},
	12:{
		requirementDescription:"总共 200000 膨胀点^3",
		effectDescription(){return "膨胀点^3加成膨胀点^2获取的公式更好"},
		done(){return player.c.total.gte(200000)},
		unlocked(){return hasMilestone('c',11)},
	},
	13:{
		requirementDescription:"总共 650000 膨胀点^3",
		effectDescription(){return "膨胀点^3获取^1.1"},
		done(){return player.c.total.gte(650000)},
		unlocked(){return hasMilestone('c',12)},
	},
	14:{
		requirementDescription:"总共 1200000 膨胀点^3",
		effectDescription(){return "α~ε获取^1.05"},
		done(){return player.c.total.gte(1200000)},
		unlocked(){return hasMilestone('c',13)},
	},
	15:{
		requirementDescription:"总共 5000000 膨胀点^3",
		effectDescription(){return "ζ~θ获取^1.05"},
		done(){return player.c.total.gte(5000000)},
		unlocked(){return hasMilestone('c',14)},
	},
	16:{
		requirementDescription:"总共 2.5e7 膨胀点^3",
		effectDescription(){return "每秒获得30%可获得膨胀点^3"},
		done(){return player.c.total.gte(2.5e7)},
		unlocked(){return hasMilestone('c',15)},
	},
	17:{
		requirementDescription:"总共 1.5e8 膨胀点^3",
		effectDescription(){return "未知获取^1.015，解锁一个新可购买"},
		done(){return player.c.total.gte(1.5e8)},
		unlocked(){return hasMilestone('c',16)},
	},
	18:{
		requirementDescription:"总共 1.25e9 膨胀点^3",
		effectDescription(){return "膨胀点^3获取^1.05，解锁一行新升级(TBC)"},
		done(){return player.c.total.gte(1.25e9)},
		unlocked(){return hasMilestone('c',16)},
	},
},
upgrades:{
	11:{
		title:"new start.",
		description:"解锁答案",
		cost:new ExpantaNum(1),
		unlocked(){return hasMilestone('c',0)},
	},
	12:{
		title:"A!",
		description:"膨胀点^3现在可以加成膨胀点^2获取了",
		cost:new ExpantaNum(55),
		unlocked(){return hasMilestone('c',7)},
	},
	13:{
		title:"自我提升",
		description:"膨胀点^3获取x3",
		cost:new ExpantaNum(80),
		unlocked(){return hasUpgrade('c',12)},
	},
	14:{
		title:"3UG14",
		description:"答案获取x2",
		cost:new ExpantaNum(120),
		unlocked(){return hasUpgrade('c',13)},
	},
	15:{
		title:"3UG15",
		description:"答案获取x1.5",
		cost:new ExpantaNum(185),
		unlocked(){return hasUpgrade('c',14)},
	},
	16:{
		title:"3UG16",
		description:"解锁一个新可购买",
		cost:new ExpantaNum(240),
		unlocked(){return hasUpgrade('c',15)},
	},
	21:{
		title:"3UG21",
		description:"每购买一个答案可购买增加答案获取x1.005",
		cost:new ExpantaNum(325),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(new ExpantaNum(1.005).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('c',16)},
	},
	22:{
		title:"3UG22",
		description:"每购买一个答案可购买增加膨胀点^3获取x1.01",
		cost:new ExpantaNum(400),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(new ExpantaNum(1.01).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('c',21)},
	},
	23:{
		title:"3UG23",
		description:"每购买一个答案可购买增加α~ε获取x1.5",
		cost:new ExpantaNum(800),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(new ExpantaNum(1.5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('c',22)},
	},
	24:{
		title:"3UG24",
		description:"每购买一个答案可购买增加膨胀点获取x5",
		cost:new ExpantaNum(1200),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(new ExpantaNum(5).pow(getBuyableAmount('c',11).add(getBuyableAmount('c',12)).add(getBuyableAmount('c',13)).add(getBuyableAmount('c',21)).add(getBuyableAmount('c',22))))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('c',23)},
	},
	25:{
		title:"3UG25",
		description:"答案获取随答案数量增加",
		cost:new ExpantaNum(1500),
		effect(){
					var eff = new ExpantaNum(1)
					eff = eff.mul(player.c.answer.pow(0.125))
					return eff
		        },
		effectDisplay(){return format(upgradeEffect(this.layer,this.id))+"倍"},
		unlocked(){return hasUpgrade('c',24)},
	},
	26:{
		title:"3UG26",
		description:"膨胀点^3获取^1.05，解锁新的里程碑",
		cost:new ExpantaNum(2250),
		unlocked(){return hasUpgrade('c',25)},
	},
},
buyables:{
    11:{
    cost(){return new ExpantaNum(0.05).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)) },//x为购买的次数
    display(){return "<h1>A</br><h2>膨胀点获取每级x1e7</br><h1>当前效果："+format(new ExpantaNum(1e7).pow(getBuyableAmount(this.layer,this.id)))+"x</br>"+"<h2>花费："+format(new ExpantaNum(0.05).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)))},
    canAfford(){return player.c.answer.gte(this.cost())},//所消耗的资源大于设定的花费
    effect(){ 
		var eff = new ExpantaNum(1)
        eff = eff.mul(new ExpantaNum(1e7).pow(this.cost(getBuyableAmount(this.layer,this.id))))
        return eff
    },
    buy(){
        player.c.answer = player.c.answer.sub(this.cost())//消耗资源
        setBuyableAmount(this.layer,this.id, getBuyableAmount(this.layer,this.id).add(1))//本可重购购买次数+1
    },
	effectDisplay(){return format(getBuyableAmount(this.layer,this.id))+"×"},
	},
	12:{
	cost(){return new ExpantaNum(0.15).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)) },//x为购买的次数
	display(){return "<h1>B</br><h2>α~ε获取每级x1e5</br><h1>当前效果："+format(new ExpantaNum(1e5).pow(getBuyableAmount(this.layer,this.id)))+"x</br>"+"<h2>花费："+format(new ExpantaNum(0.15).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)))},
	canAfford(){return player.c.answer.gte(this.cost())},//所消耗的资源大于设定的花费
	effect(){ 
		var eff = new ExpantaNum(1)
	    eff = eff.mul(new ExpantaNum(1e3).pow(this.cost(getBuyableAmount(this.layer,this.id))))
	    return eff
	},
	buy(){
	    player.c.answer = player.c.answer.sub(this.cost())//消耗资源
	    setBuyableAmount(this.layer,this.id, getBuyableAmount(this.layer,this.id).add(1))//本可重购购买次数+1
	},
	effectDisplay(){return format(getBuyableAmount(this.layer,this.id))+"×"},
	},
	13:{
	cost(){return new ExpantaNum(0.3).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)) },//x为购买的次数
	display(){return "<h1>C</br><h2>ζ~θ获取每级x1e3</br><h1>当前效果："+format(new ExpantaNum(1e3).pow(getBuyableAmount(this.layer,this.id)))+"x</br>"+"<h2>花费："+format(new ExpantaNum(0.3).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)))},
	canAfford(){return player.c.answer.gte(this.cost())},//所消耗的资源大于设定的花费
	effect(){ 
		var eff = new ExpantaNum(1)
	    eff = eff.mul(new ExpantaNum(1e3).pow(this.cost(getBuyableAmount(this.layer,this.id))))
	    return eff
	},
	buy(){
	    player.c.answer = player.c.answer.sub(this.cost())//消耗资源
	    setBuyableAmount(this.layer,this.id, getBuyableAmount(this.layer,this.id).add(1))//本可重购购买次数+1
	},
	effectDisplay(){return format(getBuyableAmount(this.layer,this.id))+"×"},
	unlocked(){return hasMilestone('c',1)},
	},
	21:{
	cost(){return new ExpantaNum(1).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)) },//x为购买的次数
	display(){return "<h1>D</br><h2>未知获取每级x1e150</br><h1>当前效果："+format(new ExpantaNum(1e150).pow(getBuyableAmount(this.layer,this.id)))+"x</br>"+"<h2>花费："+format(new ExpantaNum(1).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)))},
	canAfford(){return player.c.answer.gte(this.cost())},//所消耗的资源大于设定的花费
	effect(){ 
		var eff = new ExpantaNum(1)
	    eff = eff.mul(new ExpantaNum(1e150).pow(this.cost(getBuyableAmount(this.layer,this.id))))
	    return eff
	},
	buy(){
	    player.c.answer = player.c.answer.sub(this.cost())//消耗资源
	    setBuyableAmount(this.layer,this.id, getBuyableAmount(this.layer,this.id).add(1))//本可重购购买次数+1
	},
	effectDisplay(){return format(getBuyableAmount(this.layer,this.id))+"×"},
	unlocked(){return hasUpgrade('c',16)},
	},
	22:{
	cost(){return new ExpantaNum(25).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)) },//x为购买的次数
	display(){return "<h1>D</br><h2>答案获取每级x1.025</br><h1>当前效果："+format(new ExpantaNum(1.025).pow(getBuyableAmount(this.layer,this.id)))+"x</br>"+"<h2>花费："+format(new ExpantaNum(25).mul(new ExpantaNum(1.1).pow(getBuyableAmount(this.layer,this.id)).pow(0.8)))},
	canAfford(){return player.c.answer.gte(this.cost())},//所消耗的资源大于设定的花费
	effect(){ 
		var eff = new ExpantaNum(1)
	    eff = eff.mul(new ExpantaNum(1.025).pow(this.cost(getBuyableAmount(this.layer,this.id))))
	    return eff
	},
	buy(){
	    player.c.answer = player.c.answer.sub(this.cost())//消耗资源
	    setBuyableAmount(this.layer,this.id, getBuyableAmount(this.layer,this.id).add(1))//本可重购购买次数+1
	},
	effectDisplay(){return format(getBuyableAmount(this.layer,this.id))+"×"},
	unlocked(){return hasMilestone('c',17)},
	},
},
tabFormat:{
	主界面:{
		buttonStyle(){return {'color':'#95d400'}},
		content:["main-display","prestige-button","resource-display","upgrades"],
	},
	里程碑:{
		buttonStyle(){return {'color':'#95d400'}},
		content:[
			"main-display","prestige-button","resource-display",
			["display-text",
			        function(){
						return "<h3>您总共获取了"+"<span style='color:#ee55ea"+";font-size:25px;'>"+format(player.c.total)+"</span>"+"膨胀点^3"
					},
					],
		"milestones"],
	},
	答案:{
		unlocked(){return hasUpgrade('c',11)},
		buttonStyle(){return {'color':'#95d400'}},
		content:[
			["display-text",
		                function(){
							if (hasUpgrade('c',11))
							return "<h2>您有"+"<span style='color:#00ffff"+";font-size:25px;'>"+format(player.c.answer)+"</span>"+"答案<br>"+"每秒获取:"+"<span style='color:#00ffff"+";font-size:25px;'>"+format(new ExpantaNum(player.c.answers))+"</span>"+"答案"+"<br>您总共获取了"+"<span style='color:#00ffff"+";font-size:25px;'>"+format(new ExpantaNum(player.c.answertotal))+"</span>"+"答案"
						},
						],
		"buyables"],
	},
},
})