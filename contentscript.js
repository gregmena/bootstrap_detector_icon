/*
 * Copyright (c) 2010 The Chromium Authors. All rights reserved.  Use of this
 * source code is governed by a BSD-style license that can be found in the
 * LICENSE file.
 */

// method 1: find bootstrap string in the head--not narrow enough because string possibly in meta or title tag

var regex = /bootstrap/;

//look for bootstrap in the head only
if (regex.test(document.getElementsByTagName('head')[0].innerHTML)) {
  //if bootstrap found then trigger response
  chrome.extension.sendRequest({}, function(response) {});
}
else {
// No match was found.
	}



// method 2 jquery method: finds first reference needs an each loop

//var bootstrap = /bootstrap/;
//var links = $('head link').attr('href');

//	if(bootstrap.test(links)){
 //		chrome.extension.sendRequest({}, function(response) {});
//  }
 // 	else {
 // 	No match was found.
// 	}







