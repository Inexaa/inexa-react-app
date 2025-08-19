import React from "react";
import parse, { domToReact } from "html-react-parser";

const HtmlListWithIcon = ({
  html,
  ulClassName,
  liClassName,
  iconSrc,
  iconAlt,
  allowParagraph = false,
}) => {
  if (!html) return null;
  return parse(html, {
    replace: (domNode) => {
      if (domNode.name === "ul" || domNode.name === "ol") {
        domNode.attribs = {
          ...domNode.attribs,
          class: ulClassName,
        };
      }
      if (domNode.name === "li" || (domNode.name === "p" && allowParagraph)) {
        domNode.attribs = {
          ...domNode.attribs,
          class: liClassName,
        };
        // Filter out text nodes that are only whitespace (including \r, \n, spaces)
        const children = (domNode.children || []).filter((child) => {
          if (child.type === "text") {
            return !/^\s*$/.test(child.data);
          }
          return true;
        });
        // If more than one child, wrap in a flex div
        if (children.length > 1) {
          return (
            <li
              {...domNode.attribs}
              className="text-[#282828] font-Montserrat text-[14px] lg:text-[16px] leading-[30px] md:leading-[28px] lg:leading-[30px] font-medium flex gap-2 lg:items-center"
            >
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt={iconAlt || "list icon"}
                  className="w-[12px] h-[12px] lg:w-[16px] lg:h-[17px] mt-2.5 md:mt-2 lg:mt-0"
                />
              )}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                {domToReact(children)}
              </div>
            </li>
          );
        } else {
          return (
            <li
              {...domNode.attribs}
              className="text-[#282828] font-Montserrat text-[14px] lg:text-[16px] leading-[30px] md:leading-[28px] lg:leading-[30px] font-medium flex gap-2 lg:items-center"
            >
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt={iconAlt || "list icon"}
                  className="w-[12px] h-[12px] lg:w-[16px] lg:h-[17px] mt-[9px] md:mt-2 lg:mt-0"
                />
              )}
              {domToReact(children)}
            </li>
          );
        }
      }
    },
  });
};

export const HtmlModuleListWithIcon = ({
  html,
  ulClassName,
  liClassName,
  iconSrc,
  iconAlt,
  allowParagraph = false,
}) => {
  if (!html) return null;
  return parse(html, {
    replace: (domNode) => {
      if (domNode.name === "ul" || domNode.name === "ol") {
        domNode.attribs = {
          ...domNode.attribs,
          class: ulClassName,
        };
      }
      if (domNode.name === "p") {
        domNode.attribs = {
          ...domNode.attribs,
          class: liClassName,
        };
        // Filter out text nodes that are only whitespace (including \r, \n, spaces)
        const children = (domNode.children || []).filter((child) => {
          if (child.type === "text") {
            return !/^\s*$/.test(child.data);
          }
          return true;
        });
        // If more than one child, wrap in a flex div
        if (children.length > 1) {
          return (
            <li
              {...domNode.attribs}
              className="text-[#282828] font-Montserrat text-[14px] lg:text-[16px] leading-[30px] md:leading-[28px] lg:leading-[30px] font-medium flex gap-2 lg:items-center"
            >
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt={iconAlt || "list icon"}
                  className="w-[12px] h-[12px] lg:w-[16px] lg:h-[17px] mt-[9px] md:mt-2 lg:mt-0"
                />
              )}
              <div
                style={{
                  display: "flex",
                  gap: "8px",
                  alignItems: "start",
                  flexDirection: "column",
                }}
              >
                {domToReact(children)}
              </div>
            </li>
          );
        } else {
          return (
            <li
              {...domNode.attribs}
              className="text-[#282828] font-Montserrat text-[14px] lg:text-[16px] leading-[30px] md:leading-[28px] lg:leading-[30px] font-medium flex gap-2 lg:items-center"
            >
              {iconSrc && (
                <img
                  src={iconSrc}
                  alt={iconAlt || "list icon"}
                  className="w-[12px] h-[12px] lg:w-[16px] lg:h-[17px] mt-[9px] md:mt-2 lg:mt-0"
                />
              )}
              {domToReact(children)}
            </li>
          );
        }
      }
    },
  });
};

export default HtmlListWithIcon;
