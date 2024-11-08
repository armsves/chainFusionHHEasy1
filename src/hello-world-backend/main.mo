import Array "mo:base/Array";

actor {
  var names : [Text] = [];

  public func greet(name : Text) : async Text {
    names := Array.append(names, [name]);
    return "Hello, " # name # "!";
  };

  public query func submittedNames() : async [Text] {
    return names;
  };

};