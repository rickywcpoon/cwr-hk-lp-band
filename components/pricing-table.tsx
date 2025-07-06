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
      title: "修復不鏽鋼Rolex錶帶(Steel）",
      items: [
        {
          name: "Jubilee五珠帶",
          price: "HKD 2,800起",
        },
        {
          name: "Oyster Folded蠔式摺疊",
          price: "HKD 3,200起",
        },
        {
          name: "Oyster Rivet蠔式鉚釘",
          price: "HKD 3,200起",
        },
        {
          name: "Oyster Solid蠔式實心",
          price: "HKD 3,500 起",
        },
      ],
    },
    "two-tone": {
      title: "修復金鋼Rolex錶帶 (Two-Tone)",
      items: [
        {
          name: "Jubilee五珠錶帶(瑞士製)",
          price: "HKD 2,800起",
        },
        {
          name: "Oyster Folded蠔式摺疊",
          price: "HKD 3,500 起",
        },
        {
          name: "Oyster Rivet蠔式鉚釘",
          price: "HKD 3,800 起",
        },
        {
          name: "Oyster Solid 蠔式實心",
          price: "HKD 4,500 起",
        },
      ],
    },
    gold: {
      title: "修復18K金 Rolex錶帶（18K黃金、白金）",
      items: [
        {
          name: "女士勞力士總統與五珠鏈",
          price: "HKD 19,800起",
        },
        {
          name: "18K President & Jubilee 總統及五珠帶(1990年前製)",
          price: "HKD 25,800起",
        },
        {
          name: "18K President & Jubilee 總統及五珠帶(1990年後製)",
          price: "HKD 28,300起",
        },
        {
          name: "18K Oyster Solid蠔式實心",
          price: "HKD 33,800起",
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
