    import React,{Component} from 'react'
    import "../App.css"
    import ReactDOM from 'react-dom'
    import Cell from './Cell';
    import GridLayout from "./GridLayout";
    var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    class MonthFile extends Component 
    {
        constructor(props){
            super(props)
            const style1 = {display:"flex"};        
            var year = this.props.year;
            var month = this.props.month;

            this.state={
                year:year,
                month:month,
                rollOver:false
            }
            this.inc = this.inc.bind(this)
            this.resetDate = this.resetDate.bind(this)
        }
        
         
        inc(e,direction){
            e.preventDefault();
            if(direction == "+"){
            this.setState(prevState=>({
                  month:(parseInt(prevState.month)+1)%12,
                  year:((this.state.month == 11)?parseInt(prevState.year)+1:prevState.year)
            }))
            }
            else{
                e.preventDefault();
                console.log("months"+this.state.month);
                this.setState(prevState=>({
                    month:prevState.month==0?11:(parseInt(prevState.month)-1),
                    year:((this.state.month == 0)?parseInt(prevState.year)-1:prevState.year)
              }))
            }
        }

         
        /********************Not working as expected****************/
        resetDate(e){
            //e.preventDefault();
            //GridLayout.greet()
            var months = ["Jan","Feb","Mar","Apr","May","June","July","Aug","Sept","Oct","Nov","Dec"];
             var day = (new Date())
             var month = day.getMonth();
             var year  = day.getFullYear();
             console.error(months[month]+" "+year)
             this.setState(prevState=>({
                month:month,
                year:year
          }))
        }

        render(){
            const style1 = {display:"flex"};
            const style2 = {width:"60px",height:"70px"};
            var style221 = {border:"hidden",backgroundColor:"white"};
            return (
            <div>
            <h1 onDoubleClick={(e)=>this.resetDate(e)} className="heading">{months[this.state.month]},{this.state.year}</h1>   
            <button onClick={(e)=>this.inc(e,"+")} ><span>+</span></button>
            <button onClick={(e)=>this.inc(e,"-")} ><span>-</span></button>
            <button onClick={(e)=>this.resetDate(e)}><span>RESET</span></button>
            <div className="month">
                <div style={style1}> 
                    <div><Cell className="cell" text="Sun"></Cell>
                    <Cell className="cell" text="Mon"></Cell>
                    <Cell text="Tue"></Cell>
                    <Cell text="Wed"></Cell>
                    <Cell text="Thu"></Cell>
                    <Cell text="Fri"></Cell>
                    <Cell text="Sat"></Cell>
                    {/* {<div><Cell text="Sun"></div></Cell><Cell text="Mon"></Cell><Cell text="Tue"></Cell><Cell text="Wed"></Cell><Cell text="Thu"></Cell><Cell text="Fri"></Cell><Cell text="Sat"></Cell> */}
                    {this.addCell(this.state.year,this.state.month)}</div>
                    
                </div>
            </div>
            </div>
        )
        }

        minimum(a,b){
            return a<b?a:b;
        }

        maximum(a,b){
            return a>b?a:b;
        }

        addCell(year,month){
            //first first day of month . This decides 1st wee
            //alert(this.state.year+"..."+this.state.month)
            var currentDay   = (new Date).getDate();
            var currentMonth  = (new Date).getMonth();
            var currentYear  = (new Date).getFullYear();
            var firstDay = new Date(this.state.year,this.state.month+1, 1).getDay();
            var lastDay  = new Date(this.state.year,this.state.month+1,0).getDate();
            var daysinMonth  = new Date(this.state.year,this.state.month+1,0).getDate();
            //alert(firstDay);
            //fill array for 1st week
            var days = [];
            var lastDayFirstWeek = 0;
            var range1 = 1 ;var range2 = 7;i=0;
            var day=0;
            var cnt = 0;
            while(cnt<2){
                console.log("processing")
                if(range1==1 && range2 ==7){
                for(var i=0;i<firstDay;i++){
                    days.push("");
                }
                for(var i=2;i<=8;i++){
                    days.push(i-1);
                }
               // days.push(7);
               lastDayFirstWeek = i-1;
            }
            else{
                console.log(daysinMonth);
                for(var i=lastDayFirstWeek;i<=daysinMonth;i++){
                    days.push(i);
                }
                var daysLeft = firstDay;
                for(var i=0;i<42-firstDay;i++){
                    days.push("");
                }
                }//if len ends here
                
               // days.push("");
               // days.push("");
            cnt+=1;
            range2=8;
            
        }  
            const style3 = {width:"60px",height:"40px",backgroundColor:"red",color:"blue"};

            //days = days.filter(days=>days && days=="")
            const sty     = {color:"blue"}
            const style45 = 
            {width:"50px",
            height:"50px",
            marginRight:"10px",
            marginTop:"10px",
            backgroundColor:"white",
            border:"hidden"
            }

             var stylered={color:"red"};
             var styleblue ={color:"blue"};
             var stylegreen ={color:"green"};
            return days.map((key) =>
            {   
                var stylesdef = (key==currentDay && this.state.month == currentMonth && this.state.year==currentYear)?stylegreen:styleblue;
                var today="";
                if(key !=""){
                   today = new Date(this.state.year,this.state.month+1,key).getDay();
                
                if(today==0){
                    stylesdef = stylered;
                }
               }
                console.log("Key is :"+key+",Today is:"+today)
                return (<Cell mystyle={stylesdef} text={key}></Cell>);
            } )
        }
    }

    export default MonthFile
