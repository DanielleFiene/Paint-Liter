# Measurements are in meters
walls = [(6.1, 2.7), (7.6, 2.7), (6.1, 2.7), (7.6, 2.7)]

def calc_paint_amount(wall_measurements):
    
    square_meters = 0

    def calc_square_meters():
        nonlocal square_meters
        for width, height in wall_measurements:
            square_meters += width * height

    def calc_liters():
        return square_meters / 10  # Assuming 1 liter covers 10 square meters

    calc_square_meters()

    return calc_liters()

print('Number of paint liters needed:')
print(str(calc_paint_amount(walls)))
