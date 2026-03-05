var formFields = [];

formFields["firstName"] = {
  id: "firstName",
  name: " First Name",
  type: "text",
  label: "",
  description: "",
  placeholder: "First Name",
  defaultValue: "",
  options: [],
  visible: true,
  required: false,
  disabled: false,
  visibleWhen: [],
  requiredWhen: [],
  disabledWhen: [],
  shouldMatchRegex: false,
  hasMinLength: true,
  validWhen: {
    lengthIsGreaterThan: {
      length: "2",
      message: "First name must be atleast 3 letters long"
    }
  },
  hasMaxLength: false,
  hasNumericalRange: false,
  shouldCompareTo: false,
  omitWhenHidden: false,
  valueDelimiter: "",
  useChangesAsValues: false
};

formFields["lastName"] = {
  id: "lastName",
  name: " Last Name",
  type: "text",
  label: "",
  description: "",
  placeholder: "Last Name",
  defaultValue: "",
  options: [],
  visible: true,
  required: false,
  disabled: false,
  visibleWhen: [],
  requiredWhen: [],
  disabledWhen: [],
  shouldMatchRegex: false,
  hasMinLength: true,
  hasMaxLength: false,
  hasNumericalRange: false,
  shouldCompareTo: false,
  omitWhenHidden: false,
  valueDelimiter: "",
  useChangesAsValues: false
};

formFields["description"] = {
  id: "description",
  name: " Description",
  type: "text",
  label: "",
  description: "",
  placeholder: " (Description / Title) Example: Instructor / IT Consultant",
  defaultValue: "",
  options: [],
  visible: true,
  required: false,
  disabled: false,
  visibleWhen: [],
  requiredWhen: [],
  disabledWhen: [],
  shouldMatchRegex: false,
  hasMinLength: true,
  hasMaxLength: false,
  hasNumericalRange: false,
  shouldCompareTo: false,
  omitWhenHidden: false,
  valueDelimiter: "",
  useChangesAsValues: false
};

formFields["houseNo"] = {
  id: "houseNo",
  name: " House No",
  type: "text",
  label: "",
  description: "",
  placeholder: " House Number / Apartment",
  defaultValue: "",
  options: [],
  visible: true,
  required: false,
  disabled: false,
  visibleWhen: [],
  requiredWhen: [],
  disabledWhen: [],
  shouldMatchRegex: false,
  hasMinLength: true,
  hasMaxLength: false,
  hasNumericalRange: false,
  shouldCompareTo: false,
  omitWhenHidden: false,
  valueDelimiter: "",
  useChangesAsValues: false
};

formFields["streetName"] = {
  id: "streetName",
  name: " Street Name",
  type: "text",
  label: "",
  description: "",
  placeholder: " Street Name / Area ",
  defaultValue: "",
  options: [],
  visible: true,
  required: false,
  disabled: false,
  visibleWhen: [],
  requiredWhen: [],
  disabledWhen: [],
  shouldMatchRegex: false,
  hasMinLength: true,
  hasMaxLength: false,
  hasNumericalRange: false,
  shouldCompareTo: false,
  omitWhenHidden: false,
  valueDelimiter: "",
  useChangesAsValues: false
};

formFields["city"] = {
  id: "city",
  name: " City",
  type: "select",
  label: "",
  description: "",
  placeholder: "Select City",
  defaultValue: "",
  options: [
    {
      heading: "City",
      items: [
        {
          label: "Hyderabad",
          value: "Hyderabad"
        }
      ]
    }
  ]
};

formFields["state"] = {
  id: "state",
  name: " State ",
  type: "select",
  label: "",
  description: "",
  placeholder: "Select State",
  defaultValue: "",
  options: [
    {
      heading: "States",
      items: [
        {
          label: "Telangana",
          value: "Telangana"
        }
      ]
    }
  ]
};

formFields["country"] = {
  id: "country",
  name: " Country ",
  type: "select",
  label: "",
  description: "",
  placeholder: "Select Country",
  defaultValue: "",
  options: [
    {
      heading: "Country",
      items: [
        {
          label: "India",
          value: "India"
        }
      ]
    }
  ]
};

formFields["zipcode"] = {
  id: "zipcode",
  name: " Zipcode",
  type: "text",
  label: "",
  description: "",
  placeholder: "Zipcode",
  defaultValue: "",
  options: [],
  visible: true,
  required: false,
  disabled: false,
  visibleWhen: [],
  requiredWhen: [],
  disabledWhen: [],
  shouldMatchRegex: false,
  hasMinLength: true,
  validWhen: {
    lengthIsGreaterThan: {
      length: "3",
      message: "Zipcode should have more than 3 chars"
    }
  },
  hasMaxLength: false,
  hasNumericalRange: false,
  shouldCompareTo: false,
  omitWhenHidden: false,
  valueDelimiter: "",
  useChangesAsValues: false
};
