"use strict";(self.webpackChunkfirstp=self.webpackChunkfirstp||[]).push([[320],{3320:(_,c,r)=>{r.r(c),r.d(c,{ShoppingListModule:()=>Z});var g=r(8588),p=r(2382),t=r(1223),l=r(2457),a=r(9102),h=r(9985),u=r(9808);const f=["f"];function v(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"button",13),t.NdJ("click",function(){return t.CHM(e),t.oxw().onDelete()}),t._uU(1,"Delete"),t.qZA()}}let S=(()=>{class n{constructor(e){this.slService=e,this.editMode=!1}ngOnInit(){this.subscription=this.slService.startedEditing.subscribe(e=>{this.editedItemIndex=e,this.editMode=!0,this.editedItem=this.slService.getIngredient(e),this.slForm.setValue({name:this.editedItem.name,amount:this.editedItem.amount})})}onSubmit(e){const i=e.value,s=new h.o(i.name,i.amount);this.editMode?this.slService.updateIngredient(this.editedItemIndex,s):this.slService.addIngredient(s),this.editMode=!1,e.reset()}onClear(){this.slForm.reset(),this.editMode=!1}onDelete(){this.slService.deleteIngredient(this.editedItemIndex),this.onClear()}ngOnDestroy(){this.subscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l._))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shopping-edit"]],viewQuery:function(e,i){if(1&e&&t.Gf(f,5),2&e){let s;t.iGM(s=t.CRH())&&(i.slForm=s.first)}},decls:20,vars:3,consts:[[1,"row"],[1,"col-xs-12"],[3,"ngSubmit"],["f","ngForm"],[1,"col-sm-5","form-group"],["for","name"],["type","text","id","name","name","name","ngModel","","required","",1,"form-control"],[1,"col-sm-2","form-group"],["for","amount"],["type","number","id","amount","name","amount","ngModel","","required","","pattern","^[1-9]+[0-9]*$",1,"form-control"],["type","submit",1,"btn","btn-success",3,"disabled"],["class","btn btn-danger","type","button",3,"click",4,"ngIf"],["type","button",1,"btn","btn-primary",3,"click"],["type","button",1,"btn","btn-danger",3,"click"]],template:function(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"div",0)(1,"div",1)(2,"form",2,3),t.NdJ("ngSubmit",function(){t.CHM(s);const m=t.MAs(3);return i.onSubmit(m)}),t.TgZ(4,"div",0)(5,"div",4)(6,"label",5),t._uU(7,"Name"),t.qZA(),t._UZ(8,"input",6),t.qZA(),t.TgZ(9,"div",7)(10,"label",8),t._uU(11,"Amount"),t.qZA(),t._UZ(12,"input",9),t.qZA()(),t.TgZ(13,"div",0)(14,"div",1)(15,"button",10),t._uU(16),t.qZA(),t.YNc(17,v,2,0,"button",11),t.TgZ(18,"button",12),t.NdJ("click",function(){return i.onClear()}),t._uU(19,"Clear"),t.qZA()()()()()()}if(2&e){const s=t.MAs(3);t.xp6(15),t.Q6J("disabled",!s.valid),t.xp6(1),t.Oqu(i.editMode?"Update":"Add"),t.xp6(1),t.Q6J("ngIf",i.editMode)}},directives:[p._Y,p.JL,p.F,p.Fj,p.JJ,p.On,p.Q7,p.wV,p.c5,u.O5],styles:[""]}),n})();function b(n,o){if(1&n){const e=t.EpF();t.TgZ(0,"a",4),t.NdJ("click",function(){const d=t.CHM(e).index;return t.oxw().onEditItem(d)}),t._uU(1),t.qZA()}if(2&n){const e=o.$implicit;t.xp6(1),t.AsE(" ",e.name," (",e.amount,") ")}}let C=(()=>{class n{constructor(e,i){this.slService=e,this.loggingService=i}ngOnInit(){this.ingredients=this.slService.getIngredients(),this.subscription=this.slService.ingredientsChanged.subscribe(e=>{this.ingredients=e}),this.loggingService.printLog("Hello from ShoppingListComponent ngOnInit!")}onEditItem(e){this.slService.startedEditing.next(e)}ngOnDestroy(){this.subscription.unsubscribe()}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(l._),t.Y36(a.e))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-shopping-list"]],decls:6,vars:1,consts:[[1,"row"],[1,"col-xs-10"],[1,"list-group"],["class","list-group-item","style","cursor: pointer",3,"click",4,"ngFor","ngForOf"],[1,"list-group-item",2,"cursor","pointer",3,"click"]],template:function(e,i){1&e&&(t.TgZ(0,"div",0)(1,"div",1),t._UZ(2,"app-shopping-edit")(3,"hr"),t.TgZ(4,"ul",2),t.YNc(5,b,2,2,"a",3),t.qZA()()()),2&e&&(t.xp6(5),t.Q6J("ngForOf",i.ingredients))},directives:[S,u.sg],styles:[""]}),n})();var I=r(4466);let Z=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[p.u5,g.Bz.forChild([{path:"",component:C}]),I.m]]}),n})()}}]);