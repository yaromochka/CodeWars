var todoReadonly = {
    title: "Hey",
    description: "foobar"
};
todoReadonly.title = "Hello"; // Error: cannot reassign a readonly property
todoReadonly.description = "barFoo"; // Error: cannot reassign a readonly property
