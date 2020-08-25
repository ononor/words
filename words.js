'use strict';
const clickButton = document.getElementById('click');
const wordDivided = document.getElementById('word-area');
const tweetDivided = document.getElementById('tweet-area');

/**
 * 指定した要素の子どもを全て削除する
 * @param {HTMLElement} element HTMLの要素
 */
function removeAllChildren(element) {
    while (element.firstChild) {
      // 子どもの要素があるかぎり削除
      element.removeChild(element.firstChild);
    }
  }
  
    //TODOツイートエリアの作成

const words = [
  '男になる',
  '心配は心のガラクタ',
  'あっけらかんと考える',
  '本人に本心をさらりと言う',
  '両方楽しむ',
  '楽しいか？を基準にする',
  '同じことをずっと考えない',
  '全く気にならない',
  'その考えは有効か？',
  '感情は手放せる',
  'ないないモード→あるあるモード',
  'ついでにをやめる',
  'ひとつひとつやろう',
  '結論を先に言う',
  'ありふれた幸せで満足できる人',
  '常識はずれでいい',  
  '気のせい',
  '我が道をゆく',
  'やると決めたことは先送りしない',
  '楽な気持ちで初球から振ろう',
  'ちょっとオマケしてください',
];

let counter = 0;
  clickButton.onclick = () => {
      console.log('クリックされました');
  
      removeAllChildren(wordDivided);      
      
     
  
      //TODO言葉を表示するエリアの作成
      const paragraph = document.createElement('p');
      const result = words[counter];    
      paragraph.innerText = result;
      wordDivided.appendChild(paragraph); 

      counter++;
      //counterの値を言葉の数に収める
      counter = counter % words.length;
  }
 
  
      
  
  
    



