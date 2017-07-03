/**
 * Created by zhang on 2017/7/3.
 */
window.onload=function () {
    var employee=document.getElementById("employee");
    var worker=document.getElementById("worker");
    employee.onclick=function(){
        if(employee.className=="find-employee-btn-off"&&worker.className=="find-worker-btn-on"){
            employee.className="find-employee-btn-on";
            worker.className="find-worker-btn-off";
        }else{

        }
    }
    worker.onclick=function(){
        if(employee.className=="find-employee-btn-off"&&worker.className=="find-worker-btn-on"){

        }else{
            employee.className="find-employee-btn-off";
            worker.className="find-worker-btn-on";
        }
    }
}
