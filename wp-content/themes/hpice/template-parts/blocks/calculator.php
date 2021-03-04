<div id="PressureVesselCalculator" class="flex flex-wrap -mx-4 text-sm text-primary" data-aos="fade">
	<div id="Input" class="w-full lg:w-1/2 px-4 lg:float-left">
		<div id="vesselDiv">
			<p><br />
				<label class="setWidth">Equipment type:</label>
				<input type="radio" id="vessel1" name="vessel" value="V" class="vessel" /><label for="vessel1">Vessel</label>
				<input type="radio" id="vessel2" name="vessel" value="P" class="vessel" /><label for="vessel2">Piping</label>
				<input type="radio" id="vessel3" name="vessel" value="SG" class="vessel" /><label for="vessel3">Steam Generator</label>
			</p>
		</div>
		<br />
		<div id="fluidDiv">
			<p>
				<label class="setWidth">Fluid type:</label>
				<input type="radio" id="fluid1" name="fluid" value="L1" class="fluid" /><label for="fluid1">Group 1<br />Liquid</label>
				<input type="radio" id="fluid3" name="fluid" value="L2" class="fluid" /><label for="fluid3">Group 2<br />Liquid</label>
				<input type="radio" id="fluid2" name="fluid" value="G1" class="fluid" /><label for="fluid2">Group 1<br />Gas</label>
				<input type="radio" id="fluid4" name="fluid" value="G2" class="fluid" /><label for="fluid4">Group 2<br />Gas</label>
			</p>
		</div>
		<div id="pressureDiv">
			<p>
				<label for="yval" class="setWidth">Pressure:</label>
				<input id="yval" class="selector" size="6" />Bar
				<div id="simpleVol">
					<label for="xval" id="volLabel" class="setWidth">Volume:</label>
					<input id="xval" class="selector" size="6" /><label id="unitLabel">L</label>
					<div id="volumeDiv" style="float: right; margin-left:20px;">
						<div id="calcVol" class="pt-2 pb-2">
							<label for="vDiameter" class="setWidth"><strong>Or</strong> Diameter:</label>
							<input id="vDiameter" class="selector" size="6" />mm<br />
							<label for="vLength" class="setWidth">and Length:</label>
							<input id="vLength" class="selector" size="6" />mm
						</div>
					</div>
				</div>
			</p>
		</div>
		<br /><br />
		<div id="resultDiv">
			<h2 class="text-lg font-medium lg:text-xl uppercase"><label id="resultLabel"></label></h2>
			<br />
			<h3 class="text-lg font-medium lg:text-xl uppercase"><label id="moduleLabel"></label></h3>
		</div>
	</div>
	<div id="chart" class="w-full lg:w-1/2 px-4 lg:float-right">
		<div class="square-container">
			<div id="placeholder" class="placeholder"></div>
			<br />
			<label id="chartLabel"></label>
		</div>
		<br />
		<label id="notesLabel"></label>
	</div>
</div>