import { useEffect, useState } from "react";

const items = [
  "Two Sum",
  "Best Time to Buy and Sell Stock",
  "Contains Duplicate",
  "Valid Anagram",
  "Group Anagrams",
  "Product of Array Except Self",
  "Maximum Subarray",
  "Valid Palindrome",
  "Two Sum II",
  "3Sum",
  "Container With Most Water",
  "Move Zeroes",
  "Longest Common Prefix",
  "Longest Palindrome",
  "Valid Parentheses",
  "Min Stack",
  "Implement Queue Using Stacks",
  "Linked List Cycle",
  "Reverse Linked List",
  "Merge Two Sorted Lists",
  "Reorder List",
  "Longest Substring Without Repeating Characters",
  "Longest Repeating Character Replacement",
  "Permutation in String",
  "Minimum Window Substring",
  "Sliding Window Maximum",
  "Find All Anagrams in a String",
  "Subarray Product Less Than K",
  "Binary Search",
  "Search a 2D Matrix",
  "Search in Rotated Sorted Array",
  "Find Minimum in Rotated Sorted Array",
  "Koko Eating Bananas",
  "Find Peak Element",
  "Median of Two Sorted Arrays",
  "Maximum Depth of Binary Tree",
  "Same Tree",
  "Invert Binary Tree",
  "Binary Tree Level Order Traversal",
  "Subtree of Another Tree",
  "Lowest Common Ancestor",
  "Validate Binary Search Tree",
  "Subsets",
  "Permutations",
  "Combination Sum",
  "Letter Combinations of a Phone Number",
  "Generate Parentheses",
  "Word Search",
  "N-Queens",
  "Climbing Stairs",
  "House Robber",
  "House Robber II",
  "Coin Change",
  "Longest Increasing Subsequence",
  "Maximum Product Subarray",
  "Edit Distance",
  "Number of Islands",
  "Clone Graph",
  "Pacific Atlantic Water Flow",
  "Course Schedule",
  "Rotten Oranges",
  "Word Ladder",
  "Graph Valid Tree",
  "Merge Intervals",
  "Insert Interval",
  "Meeting Rooms",
  "Meeting Rooms II",
  "LRU Cache",
  "Kth Largest Element in an Array",
  "Trapping Rain Water",
];

const weeks = [
  { title: "Semana 1 — Arrays & Hashing", range: [0, 6] },
  { title: "Semana 2 — Two Pointers & Strings", range: [7, 13] },
  { title: "Semana 3 — Stack & Linked List", range: [14, 20] },
  { title: "Semana 4 — Sliding Window", range: [21, 27] },
  { title: "Semana 5 — Binary Search", range: [28, 34] },
  { title: "Semana 6 — Trees", range: [35, 41] },
  { title: "Semana 7 — Backtracking", range: [42, 48] },
  { title: "Semana 8 — Dynamic Programming", range: [49, 55] },
  { title: "Semana 9 — Graphs", range: [56, 62] },
  { title: "Semana 10 — Final Boss", range: [63, 69] },
];

export default function Checklist() {
  const [checked, setChecked] = useState<Record<string, boolean>>(() => {
    try {
      const raw = localStorage.getItem("checklist");
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("checklist", JSON.stringify(checked));
    } catch {}
  }, [checked]);

  const toggle = (item: string) => {
    setChecked((prev) => ({ ...prev, [item]: !prev[item] }));
  };

  const resetAll = () => {
    if (confirm("Deseja zerar todo o progresso?")) setChecked({});
  };

  const percentDone = () => {
    const total = items.length;
    const done = Object.values(checked).filter(Boolean).length;
    return Math.round((done / total) * 100);
  };

  return (
    <div className="checklist-root">
      <header className="checklist-header">
        <div>
          <h1 className="title">LeetCode Checklist</h1>
          <div className="meta">
            {percentDone()}% — {Object.values(checked).filter(Boolean).length} /{" "}
            {items.length}
          </div>
        </div>
        <div className="header-controls">
          <div className="progress-bar" aria-hidden>
            <div
              className="progress-fill"
              style={{ width: `${percentDone()}%` }}
            />
          </div>
          <button className="btn-reset" onClick={resetAll}>
            Resetar
          </button>
        </div>
      </header>

      <main className="weeks-wrapper">
        {weeks.map((week, idx) => (
          <section className="week-card" key={idx}>
            <h2 className="week-title">{week.title}</h2>
            <div className="grid">
              {items
                .slice(week.range[0], week.range[1] + 1)
                .map((item) => (
                  <label key={item} className="grid-item">
                    <input
                      type="checkbox"
                      checked={!!checked[item]}
                      onChange={() => toggle(item)}
                    />
                    <div className="item-label">{item}</div>
                  </label>
                ))}
            </div>
          </section>
        ))}
      </main>
    </div>
  );
}
