import java.util.ArrayList;

public class EvenNumbers {
  public static int[] divisibleBy(int[] numbers, int divider) {
  ArrayList<Integer> where = new ArrayList<>();
    for(int i = 0; i< numbers.length;i++) {
      if(numbers[i] % divider == 0) where.add(numbers[i]);
    }
    int[] arr = where.stream().mapToInt(i -> i).toArray();
    return arr;
  }
}