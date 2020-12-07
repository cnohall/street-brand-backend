export interface Customer {
    BirthDate:      string,
    GivenName:      string,
    MiddleName?:     string, // optional
    FamilyName:     string,
    LicenceNumber:  "NSW" | "QLD" | "SA" | "TAS" | "VIC" | "WA" | "ACT" | "NT",
    StateOfIssue:   string,
    ExpiryDate?:     string, // optional
}

