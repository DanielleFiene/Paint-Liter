def calc_square_meters(walls):
    square_meters = 0
    for wall in walls:
        square_meters += wall['width'] * wall['height']
    return square_meters

def calc_paint_amount(walls, paint_type):
    square_meters = calc_square_meters(walls)
    if paint_type == 'wall-paint':
        return square_meters / 7  # Assuming 1 liter covers 7 square meters
    elif paint_type == 'primer':
        return square_meters / 11  # Assuming 1 liter covers 11 square meters

def add_wall(walls):
    wall_count = len(walls)
    if wall_count >= 4:
        print("You can only add up to 4 walls.")
        return

    width = float(input(f"Enter width of wall {wall_count + 1} (m): "))
    height = float(input(f"Enter height of wall {wall_count + 1} (m): "))
    walls.append({'width': width, 'height': height})
    print(f"Wall {wall_count + 1} added.")

def remove_wall(walls):
    wall_count = len(walls)
    if wall_count <= 1:
        print("You must have at least one wall.")
        return

    walls.pop()
    print(f"Wall {wall_count} removed.")

def reset(walls):
    while len(walls) > 1:
        walls.pop()
    print("Walls reset. Only the first wall remains.")

def main():
    walls = [{'width': float(input("Enter width of wall 1 (m): ")),
              'height': float(input("Enter height of wall 1 (m): "))}]

    while True:
        print("\nOptions:")
        print("1. Add another wall")
        print("2. Remove last wall")
        print("3. Calculate paint needed")
        print("4. Reset")
        print("5. Exit")

        choice = input("Choose an option: ")

        if choice == '1':
            add_wall(walls)
        elif choice == '2':
            remove_wall(walls)
        elif choice == '3':
            paint_type = input("Choose paint type (wall/primer): ").lower()
            liters_needed = calc_paint_amount(walls, paint_type)
            print(f"Number of liters of {paint_type} needed: {liters_needed:.2f}")
        elif choice == '4':
            reset(walls)
        elif choice == '5':
            break
        else:
            print("Invalid option, please try again.")

if __name__ == "__main__":
    main()
