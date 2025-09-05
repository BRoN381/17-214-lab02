package edu.cmu.cs.cs214.lab02;
import edu.cmu.cs.cs214.lab02.shapes.Circle;
import edu.cmu.cs.cs214.lab02.shapes.Rectangle;
import edu.cmu.cs.cs214.lab02.shapes.Square;
import edu.cmu.cs.cs214.lab02.shapes.Shape;

public class Main {
    public static void main(String[] args) {
        // Rectangle rectangle = new Rectangle(2, 3);

        // Renderer renderer = new Renderer(rectangle);

        Shape circle = new Circle(5);
        Renderer renderer = new Renderer(circle);
        
        renderer.draw();
    }
}
