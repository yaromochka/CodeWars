type Includes<ArrayOfTypes extends Array<unknown>, TypeToFind> = TypeToFind extends ArrayOfTypes[number] ? true : false

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu', 'Santana'], 'Dio'> // expected to be `true`