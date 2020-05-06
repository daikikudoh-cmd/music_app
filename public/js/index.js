$(function(){

	/*******************************
	*ongaq マスター
	*
	********************************/

$bpm = $('.selected_bpm').val();

const $ongaq=new Ongaq({
	api_key: "b2f52d085245478087c08fa83c45f0ee",
	volume: 100,
	bpm: $bpm,
	onReady: function(){
		$('#button').addClass('button start');
		$('#button').click(function(){
			if($ongaq.params.isPlaying){
				$ongaq.pause();
				$('#button').addClass('button start');
			}else{
					$ongaq.start();
					$('#button').addClass('button pause');
				}
		})
	}
})

/*******************************
*ドラム
*
********************************/
const $my_drums = new Part ({
	sound: "my_band_drums",
	measure: 8,
	mute: false,
	maxLap: 0,
	repeat: false,
	beatsInMeasure: 16
})

$my_drums.add(new Filter ({
	key: "hihat",
	active: beat => beat % 4===0
}))

$my_drums.add(new Filter ({
	key: "kick",
	active: beat => beat % 16===0
}))

$my_drums.add(new Filter ({
	key: "snare",
	active: beat => beat ===8
}))


$ongaq.add($my_drums)


});
// const ongaq = new Ongaq ({
// 	api_key: "b2f52d085245478087c08fa83c45f0ee",
// 	volume: 100,
// 	bpm: 120,
// 	onReady: () => {
// 		const button = document.getElementById("button")
// 		button.className = "button start"
// 		button.onclick = () => {
// 			if (ongaq.params.isPlaying) {
// 				ongaq.pause()
// 				button.className = "button start"
// 			} else {
// 				ongaq.start()
// 				button.className = "button pause"
// 			}
// 		}
// 	}
// })


/*******************************
*ドラム
*
********************************/

// const my_drums = new Part ({
// 	sound: "my_band_drums",
// 	measure: 8,
// 	mute: false,
// 	maxLap: 0,
// 	repeat: false,
// 	beatsInMeasure: 16
// })
//
// my_drums.add(new Filter ({
// 	key: "hihat",
// 	active: beat => beat % 4===0
// }))
//
// my_drums.add(new Filter ({
// 	key: "kick",
// 	active: beat => beat % 16===0
// }))
//
// my_drums.add(new Filter ({
// 	key: "snare",
// 	active: beat => beat ===8
// }))
//
//
// ongaq.add(my_drums)
//
//
//
//
//
//
//
//
//
//
//
//
//
// /*******************************
// *コード
// *
// ********************************/
//
// const C =new Chord("C",{octave :2})
// const D =new Chord("D",{octave :2})
// const E =new Chord("E",{octave :2})
// const F =new Chord("F",{octave :2})
// const G =new Chord("G",{octave :2})
// const A =new Chord("A",{octave :2})
// const B =new Chord("B",{octave :2})
//
// const CM7 =new Chord("CM7",{octave :2})
// const DM7 =new Chord("DM7",{octave :2})
// const EM7 =new Chord("EM7",{octave :2})
// const FM7 =new Chord("FM7",{octave :2})
// const GM7 =new Chord("GM7",{octave :2})
// const AM7 =new Chord("AM7",{octave :2})
// const BM7 =new Chord("BM7",{octave :2})
//
// const C7 =new Chord("C7",{octave :2})
// const D7 =new Chord("D7",{octave :2})
// const E7 =new Chord("E7",{octave :2})
// const F7 =new Chord("F7",{octave :2})
// const G7 =new Chord("G7",{octave :2})
// const A7 =new Chord("A7",{octave :2})
// const B7 =new Chord("B7",{octave :2})
//
// const Cm =new Chord("Cm",{octave :2})
// const Dm =new Chord("Dm",{octave :2})
// const Em =new Chord("Em",{octave :2})
// const Fm =new Chord("Fm",{octave :2})
// const Gm =new Chord("Gm",{octave :2})
// const Am =new Chord("Am",{octave :2})
// const Bm =new Chord("Bm",{octave :2})
//
// const Cm7 =new Chord("Cm7",{octave :2})
// const Dm7 =new Chord("Dm7",{octave :2})
// const Em7 =new Chord("Em7",{octave :2})
// const Fm7 =new Chord("Fm7",{octave :2})
// const Gm7 =new Chord("Gm7",{octave :2})
// const Am7 =new Chord("Am7",{octave :2})
// const Bm7 =new Chord("Bm7",{octave :2})
//
// const CmM7 =new Chord("CmM7",{octave :2})
// const DmM7 =new Chord("DmM7",{octave :2})
// const EmM7 =new Chord("EmM7",{octave :2})
// const FmM7 =new Chord("FmM7",{octave :2})
// const GmM7 =new Chord("GmM7",{octave :2})
// const AmM7 =new Chord("AmM7",{octave :2})
// const BmM7 =new Chord("BmM7",{octave :2})
//
// const C6th =new Chord("C6th",{octave :2})
// const D6th =new Chord("D6th",{octave :2})
// const E6th =new Chord("E6th",{octave :2})
// const F6th =new Chord("F6th",{octave :2})
// const G6th =new Chord("G6th",{octave :2})
// const A6th =new Chord("A6th",{octave :2})
// const B6th =new Chord("B6th",{octave :2})
//
// const Cm6 =new Chord("Cm6",{octave :2})
// const Dm6 =new Chord("Dm6",{octave :2})
// const Em6 =new Chord("Em6",{octave :2})
// const Fm6 =new Chord("Fm6",{octave :2})
// const Gm6 =new Chord("Gm6",{octave :2})
// const Am6 =new Chord("Am6",{octave :2})
// const Bm6 =new Chord("Bm6",{octave :2})
//
// const Cdim =new Chord("Cdim",{octave :2})
// const Ddim =new Chord("Ddim",{octave :2})
// const Edim =new Chord("Edim",{octave :2})
// const Fdim =new Chord("Fdim",{octave :2})
// const Gdim =new Chord("Gdim",{octave :2})
// const Adim =new Chord("Adim",{octave :2})
// const Bdim =new Chord("Bdim",{octave :2})
//
// const Caug =new Chord("Caug",{octave :2})
// const Daug =new Chord("Daug",{octave :2})
// const Eaug =new Chord("Eaug",{octave :2})
// const Faug =new Chord("Faug",{octave :2})
// const Gaug =new Chord("Gaug",{octave :2})
// const Aaug =new Chord("Aaug",{octave :2})
// const Baug =new Chord("Baug",{octave :2})
//
// const CM9 =new Chord("CM9",{octave :2})
// const DM9 =new Chord("DM9",{octave :2})
// const EM9 =new Chord("EM9",{octave :2})
// const FM9 =new Chord("FM9",{octave :2})
// const GM9 =new Chord("GM9",{octave :2})
// const AM9 =new Chord("AM9",{octave :2})
// const BM9 =new Chord("BM9",{octave :2})
//
// const Cm9 =new Chord("Cm9",{octave :2})
// const Dm9 =new Chord("Dm9",{octave :2})
// const Em9 =new Chord("Em9",{octave :2})
// const Fm9 =new Chord("Fm9",{octave :2})
// const Gm9 =new Chord("Gm9",{octave :2})
// const Am9 =new Chord("Am9",{octave :2})
// const Bm9 =new Chord("Bm9",{octave :2})
//
//
// /*******************************
// *構成音
// *
// ********************************/
//
// const C_composition =['C2','E2','G2',]
// const Cm_composition =['C2','D2#','G2',]
// const Caug_composition =['C2','E2','G2#',]
// const C7_composition =['C2','E2','G2','A2#']
// const CM7_composition =['C2','E2','G2','B2']
// const Cm7_composition =['C2','D2#','G2','A2#']
// const D_composition =['D2','F2#','A2',]
// const Dm_composition =['D2','F2','A2',]
// const Daug_composition =['D2','F2#','A2#',]
// const D7_composition =['D2','F2#','A2','C2']
// const DM7_composition =['D2','F2#','A2','C2#']
// const Dm7_composition =['D2','F2','A2','C2']
// const E_composition =['E2','G2#','B2',]
// const Em_composition =['E2','G2','B2',]
// const Eaug_composition =['E2','G2#','C2',]
// const E7_composition =['E2','G2#','B2','D2']
// const EM7_composition =['E2','G2#','B2','D2#']
// const Em7_composition =['E2','G2','B2','D2']
// const F_composition =['F2','A2','C2',]
// const Fm_composition =['F2','G2#','C2',]
// const Faug_composition =['F2','A2','C2#',]
// const F7_composition =['F2','A2','C2','D2#']
// const FM7_composition =['F2','A2','C2','E2']
// const Fm7_composition =['F2','G2#','C2','D2#']
// const G_composition =['G2','B2','D2',]
// const Gm_composition =['G2','A2#','D2',]
// const Gaug_composition =['G2','B2','D2#',]
// const G7_composition =['G2','B2','D2','F2']
// const GM7_composition =['G2','B2','D2','F2#']
// const Gm7_composition =['G2','A2#','D2','F2']
// const A_composition =['A2','C2#','E2',]
// const Am_composition =['A2','C2','E2',]
// const Aaug_composition =['A2','C2#','F2',]
// const A7_composition =['A2','C2#','E2','G2']
// const AM7_composition =['A2','C2#','E2','G2#']
// const Am7_composition =['A2','C2','E2','G2']
// const B_composition =['B2','D2#','F2#',]
// const Bm_composition =['B2','D2','F2#',]
// const Baug_composition =['B2','D2#','G2',]
// const B7_composition =['B2','D2#','F2#','A2']
// const BM7_composition =['B2','D2#','F2#','A2#']
// const Bm7_composition =['B2','D2','F2#','A2']
//
// /*******************************
// *コード進行
// *EmーFーGーAm
// ********************************/
// const EmーFーGーAm = new Part ({
// 	sound: "rock_guitar",
// 	measure: 8, //小節
// 	mute: false,
// 	maxLap: 0,
// 	repeat: false,
// 	beatsInMeasure: 16 //小節内の拍数
// })
//
//
//
// EmーFーGーAm.add( new Filter ({
// 	key:  Em,
// 	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
// 	active: (beat, measure) => beat===0 && measure === 0
// }) )
//
// EmーFーGーAm.add( new Filter ({
// 	key:  F,
// 	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
// 	active: (beat, measure) => beat===0 && measure === 1
// }) )
//
// EmーFーGーAm.add( new Filter ({
// 	key:  G,
// 	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
// 	active: (beat, measure) => beat===0 && measure === 2
// }) )
//
// EmーFーGーAm.add( new Filter ({
// 	key:  Am,
// 	length: 15, //音が何拍分の長さかを示す数値または数値を返す�����数。
// 	active: (beat, measure) => beat===0 && measure === 3
// }) )
//
// EmーFーGーAm.add( new Filter ({
// 	key:  Em,
// 	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
// 	active: (beat, measure) => beat===0 && measure === 4
// }) )
//
// EmーFーGーAm.add( new Filter ({
// 	key:  F,
// 	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
// 	active: (beat, measure) => beat===0 && measure === 5
// }) )
//
// EmーFーGーAm.add( new Filter ({
// 	key:  G,
// 	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
// 	active: (beat, measure) => beat===0 && measure === 6
// }) )
//
// EmーFーGーAm.add( new Filter ({
// 	key:  Am,
// 	length: 15, //音が何拍分の長さかを示す数値または数値を返す関数。
// 	active: (beat, measure) => beat===0 && measure === 7
// }) )
//
//
//
// var selected_Chord = document.getElementById('selected_Chord').innerText;
//
//
// ongaq.add(FーGーEmーAm);
