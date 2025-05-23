"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

type PriceCategory = "stainless" | "two-tone" | "gold"

interface PriceItem {
  name: string
  price: string
  description?: string
}

interface PriceCategoryData {
  title: string
  items: PriceItem[]
}

export default function PricingTable() {
  const [expandedCategory, setExpandedCategory] = useState<PriceCategory | null>("stainless")

  const priceData: Record<PriceCategory, PriceCategoryData> = {
    stainless: {
      title: "不鏽鋼錶帶",
      items: [
        {
          name: "勞力士摺疊與實心五珠鏈",
          price: "US$325 / HK$2,500",
          description: "20毫米型號",
        },
        {
          name: "勞力士蠔式鉚釘",
          price: "US$360 / HK$2,800",
          description: "19毫米 / 20毫米型號",
        },
        {
          name: "勞力士蠔式摺疊扣",
          price: "US$360 / HK$2,800",
          description: "19毫米 / 20毫米型號",
        },
        {
          name: "勞力士實心蠔式",
          price: "US$450 / HK$3,500",
          description: "20毫米型號",
        },
        {
          name: "勞力士蠔式鉚釘擴展",
          price: "US$560 / HK$4,300",
          description: "20毫米型號",
        },
      ],
    },
    "two-tone": {
      title: "雙色錶帶",
      items: [
        {
          name: "瑞士製勞力士五珠鏈",
          price: "US$360 / HK$2,800",
        },
        {
          name: "美國製勞力士五珠鏈",
          price: "US$460 / HK$3,600",
        },
        {
          name: "勞力士蠔式（摺疊與鉚釘）",
          price: "US$420 / HK$3,500",
          description: "19毫米型號",
        },
        {
          name: "勞力士蠔式鉚釘",
          price: "US$450 / HK$3,800",
          description: "20毫米型號",
        },
        {
          name: "勞力士摺疊蠔式",
          price: "US$580 / HK$4,500",
          description: "20毫米型號",
        },
        {
          name: "勞力士實心蠔式",
          price: "US$580 / HK$4,500",
          description: "20毫米型號",
        },
      ],
    },
    gold: {
      title: "18K金錶帶（黃金、白金與玫瑰金）",
      items: [
        {
          name: "男士勞力士總統與五珠鏈",
          price: "US$1,950+ / HK$15,300+",
        },
        {
          name: "男士勞力士總統與五珠鏈（1990年後）",
          price: "US$2,500+ / HK$19,500+",
        },
        {
          name: "男士勞力士蠔式",
          price: "US$2,850+ / HK$22,000+",
        },
        {
          name: "女士勞力士總統與五珠鏈",
          price: "US$1,750+ / HK$13,600+",
        },
      ],
    },
  }

  const toggleCategory = (category: PriceCategory) => {
    if (expandedCategory === category) {
      setExpandedCategory(null)
    } else {
      setExpandedCategory(category)
    }
  }

  return (
    <div className="w-full max-w-4xl mx-auto">
      <div className="grid gap-6">
        {Object.entries(priceData).map(([key, category]) => (
          <div
            key={key}
            className={`bg-gradient-to-br from-white to-gray-50 rounded-lg overflow-hidden transition-all duration-300 border border-gray-200 ${
              expandedCategory === key ? "shadow-lg" : "shadow-md"
            }`}
          >
            <button
              onClick={() => toggleCategory(key as PriceCategory)}
              className="w-full flex items-center justify-between p-6 text-left"
            >
              <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
              <ChevronDown
                className={`h-5 w-5 text-burgundy transition-transform duration-300 ${
                  expandedCategory === key ? "transform rotate-180" : ""
                }`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ${
                expandedCategory === key ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
              }`}
            >
              <div className="px-6 pb-6">
                <div className="border-t border-gray-200 pt-4">
                  <table className="w-full">
                    <tbody>
                      {category.items.map((item, index) => (
                        <tr
                          key={index}
                          className={`border-b border-gray-100 ${
                            index === category.items.length - 1 ? "border-b-0" : ""
                          }`}
                        >
                          <td className="py-4">
                            <div className="font-medium text-gray-800">{item.name}</div>
                            {item.description && <div className="text-sm text-gray-500 mt-1">{item.description}</div>}
                          </td>
                          <td className="py-4 text-right">
                            <div className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-burgundy to-burgundy-light">
                              {item.price}
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center text-gray-500 text-sm">
        <p>* 價格適用於標準修復服務。嚴重損壞或特殊要求可能需要額外費用。</p>
        <p className="mt-2">* 價格自2023年起生效。請聯繫我們獲取最新價格。</p>
      </div>
    </div>
  )
}
