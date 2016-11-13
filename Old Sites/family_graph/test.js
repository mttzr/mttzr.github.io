var data = {
	"1" : {
		"id" : "1",
		"firstName" : "Matthew",
		"lastName" : "Zehnder",
		"profilePic" : "https://instagram.fsjc1-2.fna.fbcdn.net/hphotos-xft1/t51.2885-19/s150x150/11820482_884275021641710_33796285_a.jpg",
		"edgesTo" : [2,3]
		},

	"2" : {
		"id" : "2",
		"firstName" : "Shelly",
		"lastName" : "Zehnder",
		"profilePic" : "hhttps://instagram.fsjc1-2.fna.fbcdn.net/hphotos-xta1/t51.2885-19/11261213_1596473593944262_1195838761_a.jpg",
		"edgesTo" : [1, 4, 5]
		},

	"3" : {
		"id" : "3",
		"firstName" : "Paul",
		"lastName" : "Zehnder",
		"profilePic" : "https://instagram.fsjc1-2.fna.fbcdn.net/hphotos-xft1/t51.2885-19/s150x150/11820482_884275021641710_33796285_a.jpg",
		"edgesTo" : [1, 4, 5]
		},


	"4" : {
		"id" : "4",
		"firstName" : "Trevor",
		"lastName" : "Zehnder",
		"profilePic" : "https://scontent.fsjc1-2.fna.fbcdn.net/hphotos-xaf1/v/t1.0-9/163070_1774853455102_6729867_n.jpg?oh=5a3606528fb147d2a73e1b783ac9f8fa&oe=571E6541",
		"edgesTo" : [2, 3]
		},			

	"5" : {
		"id" : "5",
		"firstName" : "Erica",
		"lastName" : "Zehnder",
		"profilePic" : "https://instagram.fsjc1-2.fna.fbcdn.net/hphotos-xtf1/t51.2885-19/s150x150/11325410_879584772123018_1559083249_a.jpg",
		"edgesTo" : [2, 3]
		}	
}

function test(data){
	for(element in data){
		for(datapoint in data[element]){
			console.log(data[element][datapoint])
		}
	}
}

test();
