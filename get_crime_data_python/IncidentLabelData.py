incidentList = ['Traffic'];
events = [];
count = 0
#Get type of incident 
def getIncident(entry):
    counter = 1
    commaIndex = entry.find(',');
    while counter < 3:
        counter+=1
        commaIndex = entry.find(',', commaIndex+1)
    endCommaIndex = entry.find(',', commaIndex+1)
    incidentType = entry[commaIndex+1:endCommaIndex];
    return incidentType

#returns the address (long and lat)
def get_address(whole):
    temp = whole[whole.rfind("null"):]
    return temp[5:29]


def to_text():
    count = 0
    f= open("testfile.txt","w+") #wwrites to text file
    f.write('[')
    for element in events: 
        exact_location = get_address(element)
        if len(exact_location) != 0 and count < 1000:
            count = count + 1
            indexP = exact_location.find(',')
            f.write('"')
            f.write(exact_location)
            f.write('"')
            f.write(',')
    f.write(']')       
    f.close()
with open('CrimeData.csv', 'r') as data:
    incidents = data.readlines()
    for incident in incidents:
        possibleType = getIncident(incident)
        if possibleType in incidentList:
            events.append(incident)
            count = count + 1
        data.close();
to_text();
