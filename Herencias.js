paquete com. bootcamp;

clase pública cocheMain {

    public static void main(String[] args) {
        String coche = "Alfa Romeo";
        Coche cocheobj = nuevo Coche();

        Coche cocheobj2 = nuevo Coche("rojo","honda", "civic", "1430,45", "5,4");

        cocheobj2. acelerar(50);

        Sistema. fuera. println(cocheobj2);

        CocheElectrico cocheElectrico = nuevo CocheElectrico();
        cocheElectrico. motorElectrico = "Tesla";
        cocheElectrico. color = "Rojo";
        cocheElectrico. fabricante = "Tesla";
        cocheElectrico. modelo = "Compacto";

        Sistema. fuera. println(cocheElectrico);

        CocheHibrido CocheHibrido = nuevo CocheHibrido();
        CocheHibrido. motorHibrido = "Toyota";
        CocheHibrido. color = "Azul";
        CocheHibrido. fabricante = "Mercedes";
        CocheHibrido. modelo = "Compacto";




        A partir de aquí se pueden ir modificando los atributos de la clase coche

       /* cocheobj2.color = "azul";
        System.out.println(cocheobj2);
        cocheobj2.fabricante = "Mercedes";
        System.out.println(cocheobj2);
        cocheobj2.modelo = "clase a";
        System.out.println(cocheobj2);
        cocheobj2.peso = "1450,5";
        System.out.println(cocheobj2);
        cocheobj2.velocidad = 80;
        System.out.println(cocheobj2);
        */
    }
}
