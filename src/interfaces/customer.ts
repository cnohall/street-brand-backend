export default interface Customer {
    birthDate:      string,
    givenName:      string,
    middleName?:     string, // optional
    familyName:     string,
    licenceNumber:  "NSW" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "ACT" | "NT",
    stateOfIssue:   string,
    expiryDate?:     string, // optional
}

