//Bowman Statue by Wodian

var status = 0;  

function start() {  
    status = -1;  
    action(1, 0, 0);  
}  

function action(mode, type, selection) {  
       
    if (mode == -1 || cm.getPlayer().getJobStyle() != MapleJob.BEGINNER) {  
        cm.dispose();  
    }  
    else {   
        if (status >= 2 && mode == 0) {   
            cm.sendOk("Goodbye");   
            cm.dispose();   
            return;   
        }   
          
        if (mode == 1) {  
            status++;  
        }      
        else {  
            status--;  
        }  
            if (status == 0) { 
            cm.sendNext("If you want to go to Henesys press next!");
        }
        else if (status == 1) {
            cm.warp(100000000,0);
            cm.dispose();
            }
        }
    }  