export default interface Customer {
    birthDate:      string,
    givenName:      string,
    middleName?:    string, // optional
    familyName:     string,
    licenceNumber:  string,
    stateOfIssue:   "NSW" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "ACT" | "NT",
    expiryDate?:     string, // optional
}

