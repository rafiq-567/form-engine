import Sidebar from "./Sidebar";
import Canvas from "./Canvas";
import PropertiesPanel from "./PropertiesPanel";

export default function Builder() {
  return (
    <div className="flex h-screen">
      <Sidebar />

      <Canvas />

      <PropertiesPanel />
    </div>
  );
}