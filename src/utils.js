export function processText(event){
    
    var contentText=document.getElementById("source-content").value;
    
    var displayFlag=true;

    if(contentText.length===0){
        alert("Please enter some text!");
        displayFlag=false;
    }else{
        displayFlag=true;
    }

    var entityList=[...new Set(convertToList(document.getElementById("entity-list").value))];
    
    entityList = entityList.map(str => str.replace(/\([^)]*\)/g, '').trim());

    if(entityList.length===0 || entityList[0]===""){
        alert("Please enter some entities!");
        displayFlag=false;
    }else{
        displayFlag=true;
    }

    var result=[];
    var counter=0;
    var totalKeywords=entityList.length;
   
    entityList.forEach(entity=>{

        var entityNum=countWordOccurrences(contentText, entity);
        
        if(entityNum!==0){
            counter=counter+1;
           
        }

        var entityResult = entity+": "+entityNum;   
        result.push(entityResult);
        
    });

    
    var modResult=JSON.stringify(result.toString(), null, 2).replace(/"/g,'');
    modResult=modResult.replace(/,/g,'\n');
    
  
    var totalKeywordsUsed=counter;
    var finalPercentage = Math.round(((totalKeywordsUsed/totalKeywords)*100));
    
    var resultObj={
       Total_Number_Of_Keywords: totalKeywords,
       Total_Number_Of_Keywords_Used: totalKeywordsUsed,
       Percentage_Of_Keywords_Used: finalPercentage 
        
    }
  
    var resultString=JSON.stringify(resultObj,null,2).replace(/{/g,'');
    resultString=resultString.replace(/"/g,'');
    resultString=resultString.replace(/}/g,'');
    
    if(displayFlag){
    document.getElementById("results").value=modResult;
    document.getElementById("percentage").value=resultString.replace(/,/g,'\n');
    scrollToBottom();
    }
}

function convertToList(text) {
    const list = text.trim().split('\n');
    return list;
  }

  function countWordOccurrences(text, word) {
    const regex = new RegExp('\\b' + word + '\\b', 'gi'); // create a case-insensitive regular expression that matches the word surrounded by word boundaries
    const matches = text.match(regex); // find all matches of the regular expression in the text
    return matches ? matches.length : 0; // return the number of matches, or 0 if there are no matches
  }

function scrollToBottom() {
  window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: 'smooth'
  });
}
