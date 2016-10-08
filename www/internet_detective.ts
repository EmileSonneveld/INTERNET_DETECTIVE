

// Current Challenge
function SetCCN(currentChallengeNumber)
{
  localStorage.setItem("saveStorage_currentChallengeNumber", currentChallengeNumber);
}
function GotoNextCCN()
{
  var chn = localStorage.getItem("saveStorage_currentChallengeNumber");
  chn+=1;
  SetCCN(chn);
}
function GetCC()
{
  if (localStorage.getItem("saveStorage_currentChallengeNumber") === null)
    localStorage.setItem("saveStorage_currentChallengeNumber", 0);

  var chn = localStorage.getItem("saveStorage_currentChallengeNumber");
  return challengeData[chn];
}

function UpdatePageToChallenge()
{
  id_question_text.value = GetCC().question;
  //id_win_message.value = GetCC().win_message;
}

function updateDropdownStatus(evt)
{
  if(evt!=null)
    console.log(evt.srcElement.value);

  var myNode = id_unordered_autocomplete_list;
  while (myNode.firstChild) {
    myNode.removeChild(myNode.firstChild);
  }

  var inputValue = id_textinput.value;
  var responsesArray = [];
  var arrayLength = challengeData.length;
  for (var i = 0; i < arrayLength; i++) {
    var chalangeObj = challengeData[i];
    if(chalangeObj.answerGood.toLowerCase().includes(inputValue.toLowerCase()))
      responsesArray.push(chalangeObj.answerGood);

    for (var j = 0; j < chalangeObj.answerBad.length; j++) {
      if(chalangeObj.answerBad[j].toLowerCase().includes(inputValue.toLowerCase()))
        responsesArray.push(chalangeObj.answerBad[j]);
    }
  }

  var responsesFilteredArray = responsesArray.filter(function(item, pos) {
    return responsesArray.indexOf(item) == pos;
  })

  var responsesFilteredArrayLength = responsesArray.length;
  for (var i = 0; i < responsesFilteredArrayLength; i++) {
    var str = responsesFilteredArray[i];

    var child = document.createElement("li");
    var ref = document.createElement("a");
    ref.href="#"
    ref.innerHTML = str;
    child.appendChild(ref);
    ref.addEventListener("click", supselectionClicked)
    myNode.appendChild(child);
  }
}

function supselectionClicked(evt)
{
  console.log(evt.srcElement);
  id_textinput.value = evt.srcElement.innerHTML;
  $('#myModal').modal('show');
  //evt.preventDefault();
}

/**
 * Get the current URL.
 *
 * @param {function(string)} callback - called when the URL of the current tab
 *   is found.
 */
 function getCurrentTabUrl(callback) {
  // Query filter to be passed to chrome.tabs.query - see
  // https://developer.chrome.com/extensions/tabs#method-query
  var queryInfo = {
    active: true,
    currentWindow: true
  };

  chrome.tabs.query(queryInfo, function(tabs) {
    // chrome.tabs.query invokes the callback with a list of tabs that match the
    // query. When the popup is opened, there is certainly a window and at least
    // one tab, so we can safely assume that |tabs| is a non-empty array.
    // A window can only have one active tab at a time, so the array consists of
    // exactly one tab.
    var tab = tabs[0];

    // A tab is a plain object that provides information about the tab.
    // See https://devel  oper.chrome.com/extensions/tabs#type-Tab
    var url = tab.url;

    // tab.url is only available if the "activeTab" permission is declared.
    // If you want to see the URL of other tabs (e.g. after removing active:true
    // from |queryInfo|), then the "tabs" permission is required to see their
    // "url" properties.
    console.assert(typeof url == 'string', 'tab.url should be a string');

    callback(url);
  });

  // Most methods of the Chrome extension APIs are asynchronous. This means that
  // you CANNOT do something like this:
  //
  // var url;
  // chrome.tabs.query(queryInfo, function(tabs) {
  //   url = tabs[0].url;
  // });
  // alert(url); // Shows "undefined", because chrome.tabs.query is async.
}


document.addEventListener('DOMContentLoaded', function()
{
  id_textinput.addEventListener("change", updateDropdownStatus);
  id_textinput.addEventListener("keyup", updateDropdownStatus);
  if (localStorage.getItem("saveStorage") !== null){
    id_textinput.value = localStorage.getItem("saveStorage");
  }
  updateDropdownStatus();
  UpdatePageToChallenge();

  window.onbeforeunload = function(e) {
    localStorage.setItem("saveStorage", id_textinput.value);
    //return 'Dialog text here.';
  };
});
