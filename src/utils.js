export function processText(event){
    
    var contentText=document.getElementById("source-content").value;

    if(contentText.length===0){
        alert("Please enter some text!")
    }

    var entityList=[...new Set(convertToList(document.getElementById("entity-list").value))];

    if(entityList.length===0 || entityList[0]===""){
        alert("Please enter some entities!")
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
    
    document.getElementById("results").value=modResult;
    
  
    var totalKeywordsUsed=counter;
    var finalPercentage = ((totalKeywordsUsed/totalKeywords)*100);
    
    var resultObj={
       Total_Number_Of_Keywords: totalKeywords,
       Total_Number_Of_Keywords_Used: totalKeywordsUsed,
       Percentage_Of_Keywords_Used: finalPercentage 
        
    }
  
    var resultString=JSON.stringify(resultObj,null,2).replace(/{/g,'');
    
    document.getElementById("percentage").value=resultString.replace(/,/g,'\n');
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
