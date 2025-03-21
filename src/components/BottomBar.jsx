import { routeOptions } from "@/constants/constants";
import { useAuthContext } from "@/hooks/useAuthContext";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

<<<<<<< HEAD
export default function BottomBar({ activeRoute, setActiveRoute }) {
=======
export default function BottomBar() {
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
  const { user } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed w-full bg-muted border border-border h-16 flex justify-between items-center">
      {routeOptions.map(function (option, index) {
        return (
          <div
            key={option.route}
            role="button"
<<<<<<< HEAD
            className={`relative flex flex-col gap-1 items-center justify-center w-full h-full text-xs font-medium text-center transition-all duration-300
            ${
              activeRoute === option.route
                ? "text-brand"
                : "text-muted-foreground"
            }
            `}
            onClick={() => {
              setActiveRoute(option.route);
              navigate(option.route);
=======
            className={`relative flex flex-col items-center justify-center w-full h-full text-xs font-medium text-center transition-all duration-300 ${
              index === 0 ? "text-primary" : "text-secondary"
            }`}
            onClick={() => {
              if (option.external) {
                window.open(option.route, "_blank");
              } else {
                navigate(option.route);
              }
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
            }}
          >
            {option.icon}
            {option.badge && (
              <p className="absolute top-1.5 right-5 text-[18px] font-light rounded-sm">
                {option.badge}
              </p>
            )}
<<<<<<< HEAD
            {option.name}
=======
>>>>>>> 92ceedfebe3e9a74095ea4dd8621d91cb999ccb8
          </div>
        );
      })}
    </div>
  );
}
