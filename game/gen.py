alpha = "hijklmn"
##
##for b in range(len(alpha)):
##    x = alpha[b]
##
##    print("\t\t\t\t<div id = \"row_" + x + "\">")

x = "o"

for i in range(15):
    if i == 0:
        print("\t\t\t\t\t<img class = \"grid\" id = \"" + x + "_" + str(i) + \
              "\" src = \"game\\blank_bottom_left.gif\" onclick = \"gridAction(this.id)\">")
    elif i == 14:
        print("\t\t\t\t\t<img class = \"grid\" id = \"" + x + "_" + str(i) + \
              "\" src = \"game\\blank_bottom_right.gif\" onclick = \"gridAction(this.id)\">")

    else:
        print("\t\t\t\t\t<img class = \"grid\" id = \"" + x + "_" + str(i) + \
              "\" src = \"game\\blank_bottom.gif\" onclick = \"gridAction(this.id)\">")
    
print("\t\t\t\t</div>")
