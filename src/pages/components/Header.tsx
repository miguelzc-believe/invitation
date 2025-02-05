import { AppBar, Toolbar, Button } from "@mui/material";
import Link from "next/link";
import { FC } from "react";

const Header: FC = () => {
  return (
    <AppBar position="sticky" sx={{ bgcolor: "primary.main" }}>
      <Toolbar sx={{ justifyContent: "center" }}>
        {[1, 2, 3, 4, 5].map((section) => (
          <Link
            key={section}
            href={`#section${section}`}
            passHref
            legacyBehavior
          >
            <Button
              component="a"
              sx={{
                color: "white",
                mx: 1,
                "&:hover": { bgcolor: "primary.dark" },
              }}
            >
              Sección {section}
            </Button>
          </Link>
        ))}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
