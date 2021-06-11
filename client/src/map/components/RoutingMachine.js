import { MapLayer } from "react-leaflet";
import L from "leaflet";
import "leaflet-routing-machine";
import "leaflet-routing-machine/examples/Control.Geocoder";
import { withLeaflet } from "react-leaflet";

class Routing extends MapLayer {
  createLeafletElement() {
    let { map } = this.props;
    const waypoints = [L.latLng(19.221, 72.852), L.latLng(19.258, 72.852)];
    // https://raw.githubusercontent.com/iconic/open-iconic/master/png/map-marker-8x.png
    const startIcon = L.icon({
      iconUrl:
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAU5SURBVHhe5ZtLjC1DHIdnCC4JIm5ugrHxthJCzIiVFRsLyYmIkEgkSCTMBiF27sZi3OSu2djITOxtEMHMCIJ4hIUIM+JNvBcex+87XefcU93/7qp+n3a/5Ev16T6nXl1VXV3dZ3mpG86RN8hr5aXyQnmWPF3Cr/In+an8WL4hX5Jfy8FyUD4o35bjir4lH5DENRhW5FH5h7QKVcXf5RF5nlxYTpaPySYLnpaKeESeJBeKy+X70sp0G74nGUsWgpH8TVoZbVMGzltkr9wv/5FWBj1XVlbG6+vr4+3t7fHe3t54Hj5vbm5Ojo9GI/P3OZL2vbIXKLyVKU8KlC5wDCUr4j7ZKTT7wjNfteBpIiuCvHTWHRjwCvs8zblJiM9KJyVjwiWyVbjU5Y729PPAWadmRpK5wgw+u/25NcfYQfx8vcB3ZauXSK7zVsKhwlMwr9BF6Lsbk1+lIP6ISnhItgIFyJ3kcIYM2Bld8Hn4nfu9B+lwuEC657mycZjeWgmONzbME7atY7VRPJluQXocKvAp2SjcjJhnf21tzWXLI6bwV8gfZbDJEl8S7TECXYEp89myMbirsxKyRvw97Q9xj6TwxBHVZ4k3iT6B8YDdBTJPaQzzlpZrtAFzhCIo8Hw8sRWQaWqBOQJrCkFOcGERLGZclWz6KANua8bW8vLylttuFMW7o8CL20h/nmvkoWSzHrdLq4bdefAInX3gjL8gp/FEtQBQ/FwZPAJjwa2ykJgWwDJWBqP29yPP/pPyiWSzHIp/XwHO0CDstkwKD0JMBZj33UYF0ES7wKvkQAUE1wxiKoAFzBha6fsGXjqrq6tuy+QiF9biB5npXwZlZnzXy2lc0WMAkE6SXELgcvidLCSmBUyXrgtx/bN10uloEHRbJme4MJeYCvjLhUMk+NwjpgK+deEQ+dmFucRUwDcu9Njf91u8umOlu76ylEznCxfmElMBn7jQQ4OP25pxvgvbxrvubW0VXnx4zFZITAW87kKP3d1dtzUjZhbYBGXSedOFucRUwKsu9NjZycx7uqqAMi3gZRfWhg7vXWOZgxvE9s9K8wDFn7n9ZHeOX8pGrgLwnAtnMAgatb/hwrbwWlng7D8vqYhGuFKmazhvPSB4AyJKtwDFm0mM9DmUo3kTVwdzOdxYCQ6tCFHgdDzBSiDeJPqEwLOCD2Tj3C0zieWMBUVrgqUrgPiSaI/BWiSHcmzleeEp8iuZSTBnVXhTx2qjeDKFD6wKcwN0mmyFR6WV6CI9F3hctgZ3V9/LTMJ0BWM8mBJ9ddB3Kbj5iIz4A0tg3LqfKVtlXVqJTzKX0xKmUDBGc69V8NntNwsOEYXHqCtKXXhA+pm0MjCxp6fDn8sDshNuk1YmZubMEUrBWQ9c6+clT53yorQy4lmlIkoWHF+Rlajzpuhlkre16BJBVKDJ8hWruMj2FKbVKvRkaovptYYArFgxU/1w8qljWN+3zkiXHpa9weSImrcy1oUfSfLQK1dLmqGVwTb9WzZ+w1OVPrpCpcdrbcGLSSw/WRltQ9JauPeFeQz1i7Qy3KS8DnexXEjukFamm/ROudA8La2MN+EzcuFhPv6OtApQR16CPFUOggsk/wGyClJF4iLOQXGjjHqVPiBx3CQHibX+V9aH5aB5VloFi5HfDh7m6q9Jq4BF8pve5/lNwau2/CnSKqgl3x3UfwVj4M8M5oJqSr7T+h8f+uI6WfS/wj8l3/lfc7PkVjZdePZx7LjgLvmvnBaebfYdV8w/X2C7F050YR/wjg2zPN7i4P3hHlha+g+bFMzIFRANjgAAAABJRU5ErkJggg==",
      shadowUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      shadowSize: [50, 40],
      shadowAnchor: [15, 40],
    });
    const destIcon = L.icon({
      iconUrl:
        "data:image/png;base64,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",
      shadowUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      shadowSize: [50, 40],
      shadowAnchor: [15, 40],
    });
    const waypointIcon = L.icon({
      iconUrl:
        "data:image/png;base64,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",
      shadowUrl:
        "https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-shadow.png",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      shadowSize: [50, 40],
      shadowAnchor: [15, 40],
    });

    let leafletElement = L.Routing.control({
      waypoints,
      createMarker: function (i, start, n) {
        var marker_icon = null;
        if (i === 0) {
          marker_icon = startIcon;
        } else if (i === n - 1) {
          marker_icon = destIcon;
        } else {
          marker_icon = waypointIcon;
        }
        var marker = L.marker(start.latLng, {
          draggable: true,
          bounceOnAdd: true,
          bounceOnAddOptions: {
            duration: 1000,
            height: 800,
          },
          icon: marker_icon,
        });
        return marker;
      },
      reverseWaypoints: true,
      showAlternatives: true,
      addWaypoints: true,
      lineOptions: {
        styles: [
          { color: "black", opacity: 0.5, weight: 7 },
          { color: "#00f2ff", opacity: 1, weight: 2.5 },
        ],
      },
      altLineOptions: {
        styles: [
          { color: "black", opacity: 0.3, weight: 6 },
          { color: "#b0ffff", opacity: 0.8, weight: 2 },
        ],
      },
      geocoder: L.Control.Geocoder.nominatim(),
      routeWhileDragging: true,
    }).addTo(map.leafletElement);
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);
