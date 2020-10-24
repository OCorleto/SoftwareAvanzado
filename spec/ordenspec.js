var app=require("../src/orden.js");
describe("Orden",function(){
it("La funcion debe ser true",function() {
var value=app.NuevaOrden(5);
expect(value).toBe(true);
});
});