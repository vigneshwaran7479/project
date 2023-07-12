let i=undefined
    let br=document.getElementsByClassName('body')
    function fun1(id,e){
        if(i==undefined){
            br[id].style.display="block"
            e.className="fa-solid fa-chevron-up"
            i=id
        }
        else{
            if(i==id){
                if(br[i].style.display=='none'){
                    br[i].style.display="block"
                    document.getElementsByTagName('i')[i].className="fa-solid fa-chevron-up"
                }
                else{
                    br[i].style.display="none"
                    document.getElementsByTagName('i')[i].className="fa-solid fa-chevron-down"

                }
            }
            else{
                br[i].style.display="block"
                    document.getElementsByTagName('i')[i].className="fa-solid fa-chevron-up"
                    br[i].style.display="none"
                    document.getElementsByTagName('i')[i].className="fa-solid fa-chevron-down"
                    i=id
            }
        }
    }