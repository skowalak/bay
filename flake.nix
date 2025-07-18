{
  inputs = {
    nixpkgs.url = "github:nixos/nixpkgs/nixpkgs-unstable";
  };
  outputs = { self, nixpkgs, ... }:
  let
    forEachSupportedSystem =
      f:
      nixpkgs.lib.genAttrs [
        "aarch64-darwin"
        "aarch64-linux"
        "x86_64-darwin"
        "x86_64-linux"
      ] (system: f system);
    in
    {
      devShells = forEachSupportedSystem (system:
        let pkgs = import nixpkgs { inherit system; }; in
        {
          default = pkgs.mkShell {
            buildInputs = with pkgs; [
              hugo
              go
            ];
          };
        }
      );
    };
}
